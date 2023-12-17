import { resvg } from "../deps.ts";
import * as svg from "./svg.ts";
import type { Options } from "./options.ts";

/**
 * Generates a reproducible PNG image from a given seed.
 * Renders the image as an SVG, and then converts it to a PNG using resvg.
 */
async function generate(seed: string, opts?: Options): Promise<Uint8Array> {
  const svgString = await svg.generate(seed, opts);
  return resvg.render(svgString);
}

export { generate };
