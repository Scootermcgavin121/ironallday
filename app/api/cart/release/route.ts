import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/db";
import { cartReservations } from "@/app/db/schema";
import { eq, lt } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId } = body as { sessionId?: string };

    await db.delete(cartReservations).where(lt(cartReservations.expiresAt, new Date()));

    if (sessionId) {
      await db.delete(cartReservations).where(eq(cartReservations.sessionId, sessionId));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Release error:", err);
    return NextResponse.json({ error: "Failed to release reservations." }, { status: 500 });
  }
}
