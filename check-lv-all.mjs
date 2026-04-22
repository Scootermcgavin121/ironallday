import pg from 'pg';
const { Client } = pg;
const c = new Client({ connectionString: 'postgresql://neondb_owner:npg_A7M9xbdOBXSr@ep-wispy-flower-ai1d55ct-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require' });
await c.connect();
const r = await c.query(`SELECT id, slug, name, price, in_stock, image FROM products WHERE brand='lumevara' ORDER BY name`);
for (const row of r.rows) {
  console.log(`${row.in_stock?'✅':'❌'} ${row.id} | ${row.slug} | ${row.name} | $${row.price} | ${row.image}`);
}
console.log(`\nTotal: ${r.rows.length}`);
await c.end();
