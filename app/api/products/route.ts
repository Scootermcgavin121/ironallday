import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { products } from "@/app/db/schema";
import { eq, desc, asc, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const stockSort = desc(products.inStock);
  const suppliesLast = asc(
    sql`CASE WHEN ${products.category} = 'supplies' THEN 1 ELSE 0 END`
  );
  const nameSort = asc(products.name);

  const result = await db
    .select()
    .from(products)
    .where(eq(products.brand, "iad"))
    .orderBy(stockSort, suppliesLast, nameSort);

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
