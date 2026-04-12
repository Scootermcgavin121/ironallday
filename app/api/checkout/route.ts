import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/db";
import { orders, orderItems, products, cartReservations } from "@/app/db/schema";
import { eq, inArray, lt } from "drizzle-orm";

export const dynamic = "force-dynamic";

interface CartItemPayload {
  id: string;
  quantity: number;
  price: number;
}

interface CheckoutPayload {
  items: CartItemPayload[];
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  researchAgreed: boolean;
  sessionId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutPayload = await request.json();

    if (!body.researchAgreed) {
      return NextResponse.json(
        { error: "You must agree to the research-use-only terms to place an order." },
        { status: 400 }
      );
    }

    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const s = body.shipping;
    if (!s.firstName || !s.lastName || !s.email || !s.address || !s.city || !s.state || !s.zip) {
      return NextResponse.json(
        { error: "All required shipping fields must be filled." },
        { status: 400 }
      );
    }

    // Cleanup expired reservations
    await db.delete(cartReservations).where(lt(cartReservations.expiresAt, new Date()));

    // Verify reservation exists
    if (body.sessionId) {
      const reservations = await db
        .select()
        .from(cartReservations)
        .where(eq(cartReservations.sessionId, body.sessionId));

      if (reservations.length === 0) {
        return NextResponse.json(
          { error: "Your cart reservation has expired. Please add items to your cart again." },
          { status: 409 }
        );
      }

      const reservedMap = new Map(reservations.map((r) => [r.productId, r.quantity]));
      for (const item of body.items) {
        const reservedQty = reservedMap.get(item.id);
        if (!reservedQty || reservedQty < item.quantity) {
          return NextResponse.json(
            { error: `Reservation mismatch for "${item.id}". Please refresh your cart.` },
            { status: 409 }
          );
        }
      }
    }

    const productIds = body.items.map((i) => i.id);
    const dbProducts = await db
      .select()
      .from(products)
      .where(inArray(products.id, productIds));

    const productMap = new Map(dbProducts.map((p) => [p.id, p]));

    for (const item of body.items) {
      const dbProd = productMap.get(item.id);
      if (!dbProd) {
        return NextResponse.json({ error: `Product "${item.id}" not found.` }, { status: 400 });
      }
      if (!dbProd.inStock) {
        return NextResponse.json({ error: `"${dbProd.name}" is currently out of stock.` }, { status: 400 });
      }
    }

    const total = body.items.reduce((sum, item) => {
      const dbProd = productMap.get(item.id)!;
      return sum + Number(dbProd.price) * item.quantity;
    }, 0);

    const [order] = await db
      .insert(orders)
      .values({
        status: "pending",
        total: total.toFixed(2),
        shippingAddress: {
          firstName: s.firstName,
          lastName: s.lastName,
          email: s.email,
          phone: s.phone || "",
          address: s.address,
          apartment: s.apartment || "",
          city: s.city,
          state: s.state,
          zip: s.zip,
          country: s.country || "US",
        },
        paymentMethod: "pending",
      })
      .returning();

    await db.insert(orderItems).values(
      body.items.map((item) => ({
        orderId: order.id,
        productId: item.id,
        quantity: item.quantity,
        priceAtPurchase: Number(productMap.get(item.id)!.price).toFixed(2),
      }))
    );

    for (const item of body.items) {
      const dbProd = productMap.get(item.id)!;
      const newQty = Math.max(0, (dbProd.stockQuantity || 0) - item.quantity);
      await db
        .update(products)
        .set({
          stockQuantity: newQty,
          inStock: newQty > 0,
          updatedAt: new Date(),
        })
        .where(eq(products.id, item.id));
    }

    // Clear reservations after successful order
    if (body.sessionId) {
      await db.delete(cartReservations).where(eq(cartReservations.sessionId, body.sessionId));
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      total: total.toFixed(2),
      status: order.status,
    });
  } catch (err: unknown) {
    console.error("Checkout error:", err);
    return NextResponse.json(
      { error: "Something went wrong processing your order. Please try again." },
      { status: 500 }
    );
  }
}
