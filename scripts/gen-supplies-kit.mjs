import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const apiKey = fs.readFileSync('C:\\Users\\scott\\.openclaw\\agents\\opus-researcher\\.env.openai', 'utf8').trim().split('=')[1] || fs.readFileSync('C:\\Users\\scott\\.openclaw\\agents\\opus-researcher\\.env.openai', 'utf8').trim();
const openai = new OpenAI({ apiKey });

const prompt = `Ultra sharp, high detail, 4K-quality professional product photography. An injection supplies kit laid out on dark polished stone surface — includes a slim black injection pen with cap, a small matte black shipping box, and alcohol prep pads. Dark moody background with dark gray/black volcanic rocks and a fresh green fern leaf. Surface is dark polished stone with subtle reflections. Professional studio lighting with sharp highlights. Every detail razor sharp — no blur, no softness, no noise. A small white label reads "Injection Supplies Kit" and "For Research Only" in crisp dark sans-serif text. Masculine, premium, bold aesthetic.`;

console.log('Generating IAD Injection Supplies Kit image...');
const result = await openai.images.generate({
  model: 'gpt-image-1',
  prompt,
  size: '1024x1024',
  quality: 'high',
});

const b64 = result.data[0].b64_json;
const outPath = path.join('C:\\Users\\scott\\ironallday\\public\\images\\products', 'injection-supplies-kit.png');
fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
console.log(`✅ Saved: ${outPath} (${(Buffer.from(b64, 'base64').length / 1024 / 1024).toFixed(2)} MB)`);
