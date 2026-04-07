import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

const openai = new OpenAI({
  apiKey: fs.readFileSync("C:\\Users\\scott\\.openclaw\\agents\\opus-researcher\\.env.openai", "utf8").split("=")[1].trim(),
});

const sql = neon("postgresql://neondb_owner:npg_A7M9xbdOBXSr@ep-wispy-flower-ai1d55ct-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require");

const outDir = "C:\\Users\\scott\\ironallday\\public\\images\\products";

// Get all IAD products without images
const rows = await sql`SELECT id, name FROM products WHERE brand='iad' AND (image IS NULL OR image = '') ORDER BY name`;

console.log(`${rows.length} IAD products missing images\n`);

const basePrompt = `Professional product photo of a peptide research vial on a dark moody background with volcanic black rocks and subtle green fern leaves. The vial has a sleek black cap, clear glass body with liquid inside, and a minimalist dark label that reads "PRODUCT_NAME" in clean white sans-serif text with "IRON ALL DAY" smaller below. Studio lighting with dramatic shadows, dark ambient background. Photorealistic, high-end supplement brand aesthetic. No text outside the label.`;

for (const row of rows) {
  const slug = row.id.replace("iad-", "");
  const outPath = path.join(outDir, `${slug}.png`);
  
  if (fs.existsSync(outPath)) {
    console.log(`SKIP ${slug} (already exists)`);
    continue;
  }

  const prompt = basePrompt.replace("PRODUCT_NAME", row.name);
  console.log(`Generating: ${row.name} (${slug})...`);
  
  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "medium",
    });

    const b64 = response.data[0].b64_json;
    fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
    
    // Update DB with image URL
    const imageUrl = `https://ironallday.com/images/products/${slug}.png`;
    await sql`UPDATE products SET image = ${imageUrl} WHERE id = ${row.id}`;
    
    const sizeMB = (fs.statSync(outPath).size / 1024 / 1024).toFixed(2);
    console.log(`  ✅ ${slug}.png (${sizeMB}MB) — DB updated\n`);
    
    // Small delay to avoid rate limits
    await new Promise(r => setTimeout(r, 2000));
  } catch (err) {
    console.error(`  ❌ ${slug}: ${err.message}\n`);
  }
}

console.log("\nDone! All images generated.");
