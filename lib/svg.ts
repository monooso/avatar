import * as keys from "./keys.ts";
import miniavs from "./collections/miniavs/index.ts";

/**
 * Generates a reproducible SVG image for the given "id".
 */
async function generate(id: string): Promise<string> {
  const key = await keys.generate(id);

  return `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
  ${miniavs.generate(key)}
</svg>
  `;
}

export { generate };
