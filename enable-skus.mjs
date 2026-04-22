import pg from 'pg';
const { Client } = pg;
const c = new Client({ connectionString: 'postgresql://neondb_owner:npg_A7M9xbdOBXSr@ep-wispy-flower-ai1d55ct-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require' });
await c.connect();

// The 11 confirmed SKUs mapped to DB IDs
// BP5 BPC-157 5mg -> iad-bpc-157 (currently ❌, price $44.99 but should be $34.99)
// BP10 BPC-157 10mg -> iad-bpc-157-10mg (currently ❌, price $79.99 but should be $44.99)
// CP10 CJC/Ipa blend -> iad-cjc-1295-ipamorelin-blend (currently ❌, price $69.99 but should be $54.99)
// BPG70 GLOW 70 -> iad-glow-70-bundle (currently ❌, price $179.99 but should be $139.99)
// NJ1000 NAD+ 1000mg -> iad-nad-plus (currently ❌, price $54.99 but should be $149.99)
// SK5 Selank 5mg -> iad-selank (currently ❌, price $44.99 but should be $39.99)
// XA5 Semax 5mg -> iad-semax (currently ❌, price $79.99 but should be $39.99)
// MS10 MOTS-C 10mg -> iad-mots-c (currently ❌, price $79.99 but should be $44.99)
// 332 SLU-PP-332 5mg -> iad-slu-pp-332 (currently ❌, price $89.99 ✅)
// TSM5 Tesamorelin 5mg -> iad-tesamorelin (currently ❌, price $49.99 but should be $54.99)
// RT20 Retatrutide 20mg -> iad-retatrutide-20mg (currently ✅, price $124.99 ✅)
// Wolverine Blend -> iad-wolverine-bpc157-tb500 (currently ✅, price $89.99 - NOT in 11 SKU list but on site)

const updates = [
  { id: 'iad-bpc-157', price: '34.99', name: 'BPC-157 5mg', inStock: true },
  { id: 'iad-bpc-157-10mg', price: '44.99', name: 'BPC-157 10mg', inStock: true },
  { id: 'iad-cjc-1295-ipamorelin-blend', price: '54.99', inStock: true },
  { id: 'iad-glow-70-bundle', price: '139.99', inStock: true },
  { id: 'iad-nad-plus', price: '149.99', inStock: true },
  { id: 'iad-selank', price: '39.99', inStock: true },
  { id: 'iad-semax', price: '39.99', inStock: true },
  { id: 'iad-mots-c', price: '44.99', inStock: true },
  { id: 'iad-slu-pp-332', price: '89.99', inStock: true },
  { id: 'iad-tesamorelin', price: '54.99', inStock: true },
];

for (const u of updates) {
  let q;
  if (u.name) {
    q = await c.query(`UPDATE products SET price=$1, in_stock=$2, name=$3, updated_at=NOW() WHERE id=$4 RETURNING id,name,price,in_stock`, [u.price, u.inStock, u.name, u.id]);
  } else {
    q = await c.query(`UPDATE products SET price=$1, in_stock=$2, updated_at=NOW() WHERE id=$3 RETURNING id,name,price,in_stock`, [u.price, u.inStock, u.id]);
  }
  if (q.rows.length) {
    const r = q.rows[0];
    console.log(`✅ ${r.id} | ${r.name} | $${r.price} | inStock=${r.in_stock}`);
  } else {
    console.log(`❌ NOT FOUND: ${u.id}`);
  }
}

// Also disable products that aren't in the 11 SKU catalog but are currently in_stock
// Keep: wolverine, bac-water-10ml, bac-water-3ml, retatrutide-20mg (already in stock)
// Plus the 10 we just enabled
// Disable: ghk-cu-100mg (not in 11 SKU), ipamorelin-5mg (not in 11 SKU), supplies-kit (not in 11 SKU)
// Wait - actually ghk-cu-100mg is NOT in the 11 SKU list. The GLOW 70 bundle has GHK-Cu. 
// Ipamorelin standalone is not in 11 SKU either - CJC/Ipa blend is.
// Supplies kit not in 11 SKU.
// But let's NOT disable things without Scooter's OK. Just enable the 11 SKUs.

console.log('\nDone - 11 SKU products enabled with correct prices');
await c.end();
