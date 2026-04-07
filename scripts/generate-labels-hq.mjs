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
  { name: 'Injection Supplies', dose: 'Kit', file: 'injection-supplies-kit.png' },
];

const basePrompt = `Ultra sharp, high detail, 4K-quality professional product photography. A glass pharmaceutical peptide vial containing white lyophilized powder, shot in crisp focus with professional macro lens. The vial has a sage green/gray rubber stopper cap with metallic aluminum crimp seal. Clean white rectangular label wrapped around center of vial. Background: dark moody scene with dark gray/black volcanic rocks and a fresh green fern leaf. Surface is dark polished stone with subtle reflections. Professional studio lighting with sharp highlights on glass. Every detail razor sharp — no blur, no softness, no noise.

The white label on the vial has this text in clean, crisp, dark sans-serif font, perfectly centered and sharply rendered:`;

for (const product of products) {
  console.log(`Generating: ${product.name} ${product.dose}...`);
  try {
    let prompt;
    if (product.name === 'Injection Supplies') {
      prompt = `Ultra sharp, high detail, 4K-quality professional product photography. An injection supplies kit on dark polished stone — includes a slim injection pen with cap, a small shipping box, and alcohol prep pads. Dark moody background with volcanic rocks and a green fern leaf. Professional studio lighting, razor sharp focus, no blur. Clean modern pharmaceutical aesthetic. A small white label reads "Injection Supplies Kit" and "For Research Only" in crisp dark sans-serif text.`;
    } else {
      prompt = `${basePrompt}

"${product.name}" (bold, larger text on top line)
"${product.dose}" (smaller text below)
"For Research Only" (very small text at bottom of label)

Text must be razor sharp, perfectly spelled, and clearly legible at any zoom level. Photorealistic, magazine-quality product shot.`;
    }

    const result = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      size: '1024x1024',
      quality: 'high',
    });

    const b64 = result.data[0].b64_json;
    const outPath = path.join(outDir, product.file);
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log(`  ✅ Saved: ${outPath} (${(Buffer.from(b64, 'base64').length / 1024 / 1024).toFixed(2)} MB)`);
  } catch (err) {
    console.error(`  ❌ Failed: ${product.name} — ${err.message}`);
  }
}

console.log('\nDone!');
