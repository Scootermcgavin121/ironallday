import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const rows = await sql`SELECT id, name, slug, price, category, in_stock, brand FROM products WHERE brand = 'iad' ORDER BY name`;
console.log(JSON.stringify(rows, null, 2));
