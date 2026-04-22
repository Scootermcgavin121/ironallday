import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// 1. Fix prices not ending in .99
const priceUpdates = [
  { id: 'iad-wolverine-bpc157-tb500', price: '89.99' },
  { id: 'iad-bac-water-10ml', price: '14.99' },
  { id: 'iad-bac-water-3ml', price: '9.99' },
  { id: 'iad-ghk-cu-100mg', price: '64.99' },
  { id: 'iad-ipamorelin-5mg', price: '44.99' },
  { id: 'iad-retatrutide-20mg', price: '124.99' },
];

for (const u of priceUpdates) {
  const result = await sql`UPDATE products SET price = ${u.price}, updated_at = NOW() WHERE id = ${u.id} RETURNING id, name, price`;
  console.log(`✅ Price: ${result[0].name} → $${result[0].price}`);
}

// 2. Rename "Injection Supplies Kit" → "Research Supplies Kit" and fix slug
const supKit = await sql`UPDATE products SET name = 'Research Supplies Kit', slug = 'iad-research-supplies-kit', updated_at = NOW() WHERE id = 'iad-supplies-kit' RETURNING id, name, slug`;
console.log(`✅ Renamed: ${supKit[0].name} (slug: ${supKit[0].slug})`);

// 3. Rename "Injection Pen Kit" → "Research Pen Kit" and fix slug
const penKit = await sql`UPDATE products SET name = 'Research Pen Kit', slug = 'iad-research-pen-kit', updated_at = NOW() WHERE id = 'iad-injection-pen-kit' RETURNING id, name, slug`;
console.log(`✅ Renamed: ${penKit[0].name} (slug: ${penKit[0].slug})`);

// 4. Verify no "injection" anywhere in product names
const check = await sql`SELECT id, name FROM products WHERE brand = 'iad' AND (name ILIKE '%inject%' OR slug ILIKE '%inject%')`;
if (check.length === 0) {
  console.log('\n🟢 CLEAN: No products with "injection/inject" in name or slug.');
} else {
  console.log('\n🔴 STILL FOUND:');
  check.forEach(r => console.log(`  - ${r.id}: ${r.name}`));
}

console.log('\nDone! 🎉');
