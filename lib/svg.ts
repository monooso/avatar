import * as background from "./background.ts";
import * as body from "./body.ts";
import * as eyes from "./eyes.ts";
import * as glasses from "./glasses.ts";
import * as hair from "./hair.ts";
import * as head from "./head.ts";
import * as mouth from "./mouth.ts";
import * as mustache from "./mustache.ts";
import * as keys from "./keys.ts";

/**
 * Generates a reproducible SVG image for the given "id".
 */
export async function generate(id: string): Promise<string> {
  const key = await keys.generate(id);

  return `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${background.generate(key)}
    ${body.generate(key)}
    ${head.generate(key)}
    ${eyes.generate(key)}
    ${mouth.generate(key)}
    ${mustache.generate(key)}
    ${hair.generate(key)}
    ${glasses.generate(key)}
</svg>
  `;
}
