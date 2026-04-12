import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/db";
import { cartReservations } from "@/app/db/schema";
import { lt } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await db
      .delete(cartReservations)
      .where(lt(cartReservations.expiresAt, new Date()))
      .returning();

    return NextResponse.json({ success: true, released: result.length, timestamp: new Date().toISOString() });
  } catch (err) {
    console.error("Cron cleanup error:", err);
    return NextResponse.json({ error: "Cleanup failed." }, { status: 500 });
  }
}
