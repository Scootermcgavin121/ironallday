import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

const sql = neon(process.env.DATABASE_URL);

// Check current image paths for our 4 IAD products
const products = await sql`
  SELECT id, name, slug, image FROM products 
  WHERE id IN ('iad-wolverine-bpc157-tb500', 'iad-ghk-cu-100mg', 'iad-ipamorelin-5mg', 'iad-retatrutide-20mg')
  ORDER BY name
`;

console.log('Current IAD product images:');
products.forEach(p => console.log(`  ${p.id}: ${p.image}`));

// Check Lumevara equivalents
const lvProducts = await sql`
  SELECT id, name, slug, image FROM products 
  WHERE brand = 'lumevara' 
  AND (id LIKE '%wolverine%' OR id LIKE '%ghk%' OR id LIKE '%ipamorelin%' OR id LIKE '%retatrutide%')
  ORDER BY name
`;

console.log('\nCurrent Lumevara product images:');
lvProducts.forEach(p => console.log(`  ${p.id}: ${p.image}`));

// Check if Lumevara has its own repo
console.log('\nChecking lumevara repo...');
const lumevaraRepoExists = fs.existsSync('C:\\Users\\scott\\.openclaw\\agents\\peptide-master\\lumevara');
console.log(`Lumevara repo at peptide-master: ${lumevaraRepoExists}`);

// Also check Scootermcgavin121/lumevara
const lumevaraRepo2 = fs.existsSync('C:\\Users\\scott\\lumevara');
console.log(`Lumevara repo at C:\\Users\\scott\\lumevara: ${lumevaraRepo2}`);
