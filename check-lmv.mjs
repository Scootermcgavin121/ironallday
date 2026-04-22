import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// Check what brands exist
const brands = await sql`SELECT DISTINCT brand FROM products`;
console.log('Brands:', brands.map(b => b.brand));

// Check if lumevara has BPC-157
const bpc = await sql`SELECT id, name, brand FROM products WHERE name ILIKE '%bpc%' ORDER BY brand, name`;
console.log('\nAll BPC products:');
bpc.forEach(r => console.log(`  ${r.brand} | ${r.id} | ${r.name}`));
