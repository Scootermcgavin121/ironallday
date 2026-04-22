import pg from 'pg';
const { Client } = pg;
const c = new Client({ connectionString: 'postgresql://neondb_owner:npg_A7M9xbdOBXSr@ep-wispy-flower-ai1d55ct-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require' });
await c.connect();

// Get current text to see what needs fixing
for (const id of ['injection-supplies-kit', 'pen-cartridges-30pk']) {
  const r = await c.query(`SELECT id, subtitle, description, long_description FROM products WHERE id=$1 AND brand='lumevara'`, [id]);
  if (r.rows.length) {
    const row = r.rows[0];
    console.log(`--- ${row.id} ---`);
    if (row.subtitle) console.log(`subtitle: ${row.subtitle}`);
    if (row.description) console.log(`desc: ${row.description}`);
    if (row.long_description) console.log(`long: ${row.long_description.substring(0, 200)}`);
  }
}

// Fix them
await c.query(`UPDATE products SET 
  description = REPLACE(REPLACE(description, 'injection', 'research'), 'Injection', 'Research'),
  long_description = REPLACE(REPLACE(long_description, 'injection', 'research'), 'Injection', 'Research'),
  subtitle = REPLACE(REPLACE(subtitle, 'injection', 'research'), 'Injection', 'Research')
  WHERE brand='lumevara' AND (description ILIKE '%inject%' OR long_description ILIKE '%inject%' OR subtitle ILIKE '%inject%')`);

// Verify
const check = await c.query(`SELECT id FROM products WHERE brand='lumevara' AND (description ILIKE '%inject%' OR long_description ILIKE '%inject%' OR subtitle ILIKE '%inject%' OR name ILIKE '%inject%' OR slug ILIKE '%inject%')`);
console.log(check.rows.length ? `⚠️ Still ${check.rows.length} with inject` : '✅ All clean');

await c.end();
