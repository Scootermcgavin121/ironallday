import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

const result = await sql`UPDATE products SET
  name = 'BPC-157',
  subtitle = 'Recovery & Repair',
  description = 'Body Protection Compound-157 is a synthetic peptide consisting of 15 amino acids. Extensively studied in research settings for its effects on tissue recovery, gut health, and musculoskeletal repair mechanisms.',
  price = '44.99',
  supplier_cost = '4.50',
  category = 'recovery',
  format = '5mg vial',
  image = 'https://ironallday.com/images/products/bpc-157.png',
  stock_quantity = 0,
  in_stock = false,
  sales_velocity = 0,
  updated_at = NOW()
WHERE id = 'bpc-157' AND brand = 'lumevara'
RETURNING id, name, price, brand`;

console.log('✅ Restored:', JSON.stringify(result[0], null, 2));
