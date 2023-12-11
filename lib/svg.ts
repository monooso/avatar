import * as keys from "./keys.ts";
import miniavs from "./collections/miniavs/index.ts";
import * as options from "./options.ts";
import type { Options } from "./options.ts";

/**
 * Generates a reproducible SVG image for the given seed.
 */
async function generate(seed: string, opts?: Options): Promise<string> {
  const key = await keys.generate(seed);
  opts = options.validate(opts || {});

  return `
<svg width="${opts.size}" height="${opts.size}" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="avatarShape">
    <rect x="0" y="0" width="64" height="64" rx="${opts.radius}" ry="${opts.radius}" />
  </clipPath>

  <g clip-path="url(#avatarShape)">
    ${miniavs.generate(key)}
  </g>
</svg>
  `;
}

export { generate };
