import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Find all products with "inject" anywhere in subtitle, description, or long_description
const hits = await sql`
  SELECT id, name, subtitle, description, long_description 
  FROM products 
  WHERE brand = 'iad' 
    AND (subtitle ILIKE '%inject%' OR description ILIKE '%inject%' OR long_description ILIKE '%inject%')
`;

console.log(`Found ${hits.length} products with "inject" in text fields:\n`);
hits.forEach(h => {
  console.log(`--- ${h.id}: ${h.name} ---`);
  if (h.subtitle?.toLowerCase().includes('inject')) console.log(`  subtitle: ${h.subtitle}`);
  if (h.description?.toLowerCase().includes('inject')) console.log(`  description: ${h.description.substring(0, 200)}...`);
  if (h.long_description?.toLowerCase().includes('inject')) console.log(`  long_desc: ${h.long_description.substring(0, 200)}...`);
});

// Now fix them
console.log('\n--- FIXING ---\n');

// 1. Pen Cartridges - subtitle & description & long_description
await sql`UPDATE products SET 
  subtitle = 'Pen Refill Cartridges',
  description = 'Pack of 30 sterile pen cartridges compatible with standard research pen devices. Pre-sealed and individually packaged for laboratory use.',
  long_description = 'These sterile pen cartridges are designed for use with standard research pen devices. Each cartridge is pre-sealed, individually packaged, and manufactured to pharmaceutical-grade specifications.

Pack contains 30 cartridges. Compatible with most standard pen-style dosing devices used in research settings.

For research use only. Not for human consumption.',
  updated_at = NOW()
  WHERE id = 'iad-pen-cartridges-30pk'`;
console.log('✅ Pen Cartridges (30-Pack) — subtitle, description, long_description cleaned');

// 2. Research Supplies Kit - description mentions "injection pen"
await sql`UPDATE products SET
  description = 'Complete supplies kit including research pen and shipping box. Everything needed alongside your research compounds.',
  updated_at = NOW()
  WHERE id = 'iad-supplies-kit'`;
console.log('✅ Research Supplies Kit — description cleaned');

// 3. Research Pen Kit - check subtitle "Precision Delivery" is fine, but let's verify description
const penKit = await sql`SELECT subtitle, description, long_description FROM products WHERE id = 'iad-injection-pen-kit'`;
if (penKit[0]?.description?.toLowerCase().includes('inject') || penKit[0]?.long_description?.toLowerCase().includes('inject')) {
  await sql`UPDATE products SET
    description = REPLACE(REPLACE(description, 'injection', 'research'), 'Injection', 'Research'),
    long_description = REPLACE(REPLACE(long_description, 'injection', 'research'), 'Injection', 'Research'),
    updated_at = NOW()
    WHERE id = 'iad-injection-pen-kit'`;
  console.log('✅ Research Pen Kit — description/long_description cleaned');
} else {
  console.log('⏭️  Research Pen Kit — no inject references in description');
}

// Final verification
const remaining = await sql`
  SELECT id, name, 
    CASE WHEN subtitle ILIKE '%inject%' THEN subtitle ELSE NULL END as bad_subtitle,
    CASE WHEN description ILIKE '%inject%' THEN LEFT(description, 100) ELSE NULL END as bad_desc,
    CASE WHEN long_description ILIKE '%inject%' THEN LEFT(long_description, 100) ELSE NULL END as bad_long
  FROM products 
  WHERE brand = 'iad' 
    AND (subtitle ILIKE '%inject%' OR description ILIKE '%inject%' OR long_description ILIKE '%inject%')
`;

if (remaining.length === 0) {
  console.log('\n🟢 CLEAN: Zero instances of "inject" in any text field across all IAD products.');
} else {
  console.log(`\n🔴 Still found ${remaining.length} products with "inject":`);
  remaining.forEach(r => console.log(`  ${r.id}: subtitle=${r.bad_subtitle}, desc=${r.bad_desc}, long=${r.bad_long}`));
}
