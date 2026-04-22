import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
const r = await sql`SELECT * FROM products WHERE id = 'bpc-157' AND brand = 'lumevara'`;
console.log(JSON.stringify(r, null, 2));
