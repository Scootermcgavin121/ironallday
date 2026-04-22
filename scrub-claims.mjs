import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// Find all products with recovery/repair/heal in any text field
const hits = await sql`
  SELECT id, name, brand, subtitle, description, long_description 
  FROM products 
  WHERE (subtitle ILIKE '%recover%' OR subtitle ILIKE '%repair%' OR subtitle ILIKE '%heal%'
    OR description ILIKE '%recover%' OR description ILIKE '%repair%' OR description ILIKE '%heal%'
    OR long_description ILIKE '%recover%' OR long_description ILIKE '%repair%' OR long_description ILIKE '%heal%')
  ORDER BY brand, name
`;

console.log(`Found ${hits.length} products with recovery/repair/heal language:\n`);
hits.forEach(h => {
  const fields = [];
  if (/recover|repair|heal/i.test(h.subtitle || '')) fields.push(`subtitle: "${h.subtitle}"`);
  if (/recover|repair|heal/i.test(h.description || '')) fields.push(`desc: "${h.description?.substring(0, 150)}..."`);
  if (/recover|repair|heal/i.test(h.long_description || '')) fields.push(`long: "${h.long_description?.substring(0, 150)}..."`);
  console.log(`[${h.brand}] ${h.id} — ${h.name}`);
  fields.forEach(f => console.log(`  ${f}`));
  console.log();
});
