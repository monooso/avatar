import * as keys from "./keys.ts";
import miniavs from "./collections/miniavs/index.ts";
import * as options from "./options.ts";
import type { Options } from "./options.ts";

/**
 * Generates a reproducible SVG image for the given seed.
 */
async function generate(seed: string, opts?: Options): Promise<string> {
  const key = await keys.generate(seed);
  const size = options.validate(opts || {}).size;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
  ${miniavs.generate(key)}
</svg>
  `;
}

export { generate };
