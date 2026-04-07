import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const apiKey = fs.readFileSync('C:\\Users\\scott\\.openclaw\\agents\\opus-researcher\\.env.openai', 'utf8').trim().split('=')[1] || fs.readFileSync('C:\\Users\\scott\\.openclaw\\agents\\opus-researcher\\.env.openai', 'utf8').trim();
const openai = new OpenAI({ apiKey });

const outDir = 'C:\\Users\\scott\\ironallday\\public\\images\\products';
fs.mkdirSync(outDir, { recursive: true });

const products = [
  { name: 'Retatrutide', dose: '20mg', file: 'retatrutide-20mg.png' },
  { name: 'Ipamorelin', dose: '5mg', file: 'ipamorelin-5mg.png' },
  { name: 'BPC-157 + TB-500', dose: 'Wolverine Blend', file: 'wolverine-blend.png' },
  { name: 'GHK-Cu', dose: '100mg', file: 'ghk-cu-100mg.png' },
  { name: 'Bacteriostatic Water', dose: '10mL', file: 'bac-water-10ml.png' },
  { name: 'Bacteriostatic Water', dose: '3mL', file: 'bac-water-3ml.png' },
];

const basePrompt = `A professional product photography shot of a small glass pharmaceutical peptide vial containing white lyophilized powder. The vial has a sage green/gray rubber stopper cap with a metallic aluminum crimp seal. There is a clean white rectangular label wrapped around the center of the vial. The background is dark and moody with dark gray/black rocks and a small green fern leaf visible on the right side. The surface is dark polished stone with subtle reflections. Studio lighting, high-end commercial product photography style.

The white label on the vial has this text printed in clean, dark sans-serif font, centered:`;

for (const product of products) {
  console.log(`Generating: ${product.name} ${product.dose}...`);
  try {
    const prompt = `${basePrompt}

"${product.name}" (bold, larger text on top)
"${product.dose}" (smaller text below)
"For Research Only" (very small text at bottom of label)

The text must be clearly legible and properly spelled. Clean, pharmaceutical-grade label design.`;

    const result = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      size: '1024x1024',
      quality: 'high',
    });

    const b64 = result.data[0].b64_json;
    const outPath = path.join(outDir, product.file);
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log(`  ✅ Saved: ${outPath}`);
  } catch (err) {
    console.error(`  ❌ Failed: ${product.name} — ${err.message}`);
  }
}

console.log('\nDone!');
