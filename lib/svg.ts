import * as keys from "./keys.ts";
import miniavs from "./collections/miniavs/index.ts";
import { defaults, validate } from "./options.ts";
import type { InputOptions } from "./options.ts";

/**
 * Generates a reproducible SVG image for the given seed.
 */
async function generate(seed: string, opts?: InputOptions): Promise<string> {
  const key = await keys.generate(seed);
  const { radius, size } = validate(opts || {});
  const scaledRadius = (defaults.size / size) * radius;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="avatarShape">
    <rect x="0" y="0" width="64" height="64" rx="${scaledRadius}" ry="${scaledRadius}" />
  </clipPath>

  <g clip-path="url(#avatarShape)">
    ${miniavs.generate(key)}
  </g>
</svg>
  `;
}

export { generate };
