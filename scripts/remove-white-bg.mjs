/**
 * Removes the white background from blueshore-logo-full.png
 * and saves a new transparent-background version.
 * Run: node scripts/remove-white-bg.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const INPUT  = path.join(root, "public/images/blueshore-logo-full.png");
const OUTPUT = path.join(root, "public/images/blueshore-logo-transparent.png");

// Threshold: pixels whose R,G,B are ALL above this value are treated as "white background"
const WHITE_THRESHOLD = 235;

async function main() {
  const { data, info } = await sharp(INPUT)
    .ensureAlpha()           // add alpha channel if not present
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const channels = 4; // RGBA after ensureAlpha

  const out = Buffer.from(data); // mutable copy

  for (let i = 0; i < width * height; i++) {
    const offset = i * channels;
    const r = out[offset];
    const g = out[offset + 1];
    const b = out[offset + 2];

    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      // Scale alpha by how "white" the pixel is so edges are soft (anti-aliasing friendly)
      const whiteness = Math.min(r, g, b);
      // full white (255) → alpha 0 ; near-white (235) → alpha ≈ 51
      const alpha = Math.round(((255 - whiteness) / (255 - WHITE_THRESHOLD)) * 255);
      out[offset + 3] = alpha;
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png({ compressionLevel: 8 })
    .toFile(OUTPUT);

  console.log(`✅ Saved transparent logo → ${OUTPUT}`);
}

main().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
