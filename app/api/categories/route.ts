import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { categories } from "@/app/db/schema";
import { asc } from "drizzle-orm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const result = await db
    .select()
    .from(categories)
    .orderBy(asc(categories.displayOrder));

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
