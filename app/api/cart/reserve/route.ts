import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/db";
import { cartReservations, products } from "@/app/db/schema";
import { eq, lt, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

const RESERVATION_MINUTES = 20;

async function cleanupExpired() {
  await db.delete(cartReservations).where(lt(cartReservations.expiresAt, new Date()));
}

interface ReserveItem { id: string; quantity: number; }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, items } = body as { sessionId: string; items: ReserveItem[] };

    if (!sessionId || !items?.length) {
      return NextResponse.json({ error: "Missing sessionId or items." }, { status: 400 });
    }

    await cleanupExpired();
    await db.delete(cartReservations).where(eq(cartReservations.sessionId, sessionId));

    const expiresAt = new Date(Date.now() + RESERVATION_MINUTES * 60 * 1000);
    const errors: string[] = [];

    for (const item of items) {
      const [product] = await db.select().from(products).where(eq(products.id, item.id));
      if (!product) { errors.push(`Product "${item.id}" not found.`); continue; }
      if (!product.inStock) { errors.push(`"${product.name}" is out of stock.`); continue; }

      const [reservedRow] = await db
        .select({ total: sql<number>`COALESCE(SUM(${cartReservations.quantity}), 0)` })
        .from(cartReservations)
        .where(eq(cartReservations.productId, item.id));

      const reservedQty = Number(reservedRow?.total || 0);
      const availableQty = (product.stockQuantity || 0) - reservedQty;

      if (item.quantity > availableQty) {
        errors.push(`Only ${availableQty} of "${product.name}" available (${reservedQty} reserved by others).`);
        continue;
      }

      await db.insert(cartReservations).values({ sessionId, productId: item.id, quantity: item.quantity, expiresAt });
    }

    if (errors.length > 0) {
      await db.delete(cartReservations).where(eq(cartReservations.sessionId, sessionId));
      return NextResponse.json({ error: errors.join(" ") }, { status: 409 });
    }

    return NextResponse.json({ success: true, expiresAt: expiresAt.toISOString(), reservationMinutes: RESERVATION_MINUTES });
  } catch (err) {
    console.error("Reserve error:", err);
    return NextResponse.json({ error: "Failed to reserve items." }, { status: 500 });
  }
}
