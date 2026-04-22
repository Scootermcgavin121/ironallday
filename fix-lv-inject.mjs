import pg from 'pg';
const { Client } = pg;
const c = new Client({ connectionString: 'postgresql://neondb_owner:npg_A7M9xbdOBXSr@ep-wispy-flower-ai1d55ct-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require' });
await c.connect();

// Fix injection references in Lumevara brand
const fixes = [
  { id: 'injection-pen-kit', name: 'Research Pen Kit', slug: 'research-pen-kit' },
  { id: 'injection-supplies-kit', name: 'Research Supplies Kit', slug: 'research-supplies-kit' },
];

for (const f of fixes) {
  const r = await c.query(`UPDATE products SET name=$1, slug=$2, updated_at=NOW() WHERE id=$3 AND brand='lumevara' RETURNING id, name, slug`, [f.name, f.slug, f.id]);
  if (r.rows.length) {
    console.log(`✅ ${r.rows[0].id} -> ${r.rows[0].name} (${r.rows[0].slug})`);
  } else {
    console.log(`⚠️ ${f.id} not found or not lumevara`);
  }
}

// Also check for any "inject" in descriptions
const check = await c.query(`SELECT id, name FROM products WHERE brand='lumevara' AND (description ILIKE '%inject%' OR long_description ILIKE '%inject%' OR subtitle ILIKE '%inject%')`);
for (const row of check.rows) {
  console.log(`⚠️ Still has "inject" in text: ${row.id} | ${row.name}`);
}
if (!check.rows.length) console.log('✅ No "inject" in any Lumevara text fields');

await c.end();
