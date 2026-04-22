import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);

// Fix each product — both IAD and Lumevara versions

// 1. BPC-157 (both brands) — subtitle + description
for (const id of ['iad-bpc-157', 'bpc-157']) {
  await sql`UPDATE products SET
    subtitle = 'Research-Grade Gastric Peptide',
    description = 'Body Protection Compound-157 is a synthetic pentadecapeptide consisting of 15 amino acids. Extensively studied in research settings for its interactions with tissue signaling pathways, gut biology, and musculoskeletal mechanisms. For research purposes only.',
    updated_at = NOW()
    WHERE id = ${id}`;
  console.log(`✅ ${id} — subtitle + description`);
}

// 2. Wolverine Blend (both brands) — subtitle + description
for (const id of ['iad-wolverine-bpc157-tb500', 'wolverine-bpc157-tb500']) {
  await sql`UPDATE products SET
    subtitle = 'Dual-Peptide Research Blend',
    description = 'Dual-peptide blend combining BPC-157 and Thymosin Beta-4 fragments researched for tissue signaling and cellular migration pathways. For research purposes only.',
    updated_at = NOW()
    WHERE id = ${id}`;
  console.log(`✅ ${id} — subtitle + description`);
}

// 3. BPC-157 10mg (both brands) — long_description
for (const id of ['iad-bpc-157-10mg', 'bpc-157-10mg']) {
  await sql`UPDATE products SET
    long_description = 'BPC-157 is a 15-amino acid peptide fragment derived from a protein found in human gastric juice known as Body Protection Compound. It has been the subject of numerous in vitro and animal studies examining its interactions with tissue signaling pathways, angiogenesis, and inflammatory markers.

This 10mg formulation provides a higher concentration option for researchers requiring extended study durations or larger-scale experimental designs. Each vial undergoes rigorous HPLC-UV and LC-MS testing through Freedom Diagnostics to verify purity and molecular identity.

For research use only. Not for human consumption.',
    updated_at = NOW()
    WHERE id = ${id}`;
  console.log(`✅ ${id} — long_description`);
}

// 4. GLOW 70 Bundle (both brands) — description + long_description
for (const id of ['iad-glow-70-bundle', 'glow-70-bundle']) {
  await sql`UPDATE products SET
    description = 'Premium 3-vial research bundle: GHK-Cu 50mg, TB-500 10mg, and BPC-157 10mg. Three complementary peptides studied for matrix remodeling, cellular migration, and copper-mediated signaling. Third-party tested.',
    long_description = 'The GLOW 70 Bundle combines three of the most actively researched peptides in tissue biology and regenerative science into a single convenient research package.

• GHK-Cu 50mg — A naturally occurring copper-binding tripeptide studied for its roles in matrix remodeling, collagen synthesis, and antioxidant gene regulation.
• TB-500 10mg — A synthetic fragment of Thymosin Beta-4, researched for its involvement in cell migration, angiogenesis, and inflammatory modulation.
• BPC-157 10mg — Body Protection Compound-157, a gastric pentadecapeptide studied for tissue signaling and protective mechanisms.

All three vials are independently tested via HPLC-UV and LC-MS through Freedom Diagnostics to verify purity and molecular identity.

For research use only. Not for human consumption.',
    updated_at = NOW()
    WHERE id = ${id}`;
  console.log(`✅ ${id} — description + long_description`);
}

// 5. TB-500 (IAD) — description
await sql`UPDATE products SET
  description = 'Thymosin Beta-4 fragment studied for its role in cell migration, blood vessel formation, and tissue signaling. A key compound in research protocols. For research purposes only.',
  updated_at = NOW()
  WHERE id = 'iad-tb-500'`;
console.log('✅ iad-tb-500 — description');

// 6. TB-500 (Lumevara) — subtitle
await sql`UPDATE products SET
  subtitle = 'The Tissue Peptide',
  updated_at = NOW()
  WHERE id = 'tb-500' AND brand = 'lumevara'`;
console.log('✅ lumevara tb-500 — subtitle');

// Also check lumevara TB-500 description
const lmvTb = await sql`SELECT description FROM products WHERE id = 'tb-500' AND brand = 'lumevara'`;
if (/recover|repair|heal/i.test(lmvTb[0]?.description || '')) {
  await sql`UPDATE products SET
    description = 'Thymosin Beta-4 fragment studied for its role in cell migration, blood vessel formation, and tissue signaling. A key compound in research protocols. For research purposes only.',
    updated_at = NOW()
    WHERE id = 'tb-500' AND brand = 'lumevara'`;
  console.log('✅ lumevara tb-500 — description too');
}

// FINAL VERIFICATION
const remaining = await sql`
  SELECT id, name, brand,
    CASE WHEN subtitle ILIKE '%recover%' OR subtitle ILIKE '%repair%' OR subtitle ILIKE '%heal%' THEN subtitle ELSE NULL END as bad_sub,
    CASE WHEN description ILIKE '%recover%' OR description ILIKE '%repair%' OR description ILIKE '%heal%' THEN LEFT(description, 80) ELSE NULL END as bad_desc,
    CASE WHEN long_description ILIKE '%recover%' OR long_description ILIKE '%repair%' OR long_description ILIKE '%heal%' THEN LEFT(long_description, 80) ELSE NULL END as bad_long
  FROM products 
  WHERE (subtitle ILIKE '%recover%' OR subtitle ILIKE '%repair%' OR subtitle ILIKE '%heal%'
    OR description ILIKE '%recover%' OR description ILIKE '%repair%' OR description ILIKE '%heal%'
    OR long_description ILIKE '%recover%' OR long_description ILIKE '%repair%' OR long_description ILIKE '%heal%')
`;

if (remaining.length === 0) {
  console.log('\n🟢 ALL CLEAN: Zero instances of recovery/repair/heal across all products, both brands.');
} else {
  console.log(`\n🔴 Still found ${remaining.length}:`);
  remaining.forEach(r => console.log(`  [${r.brand}] ${r.id}: sub=${r.bad_sub}, desc=${r.bad_desc}, long=${r.bad_long}`));
}
