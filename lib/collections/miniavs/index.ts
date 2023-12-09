import * as background from "./background.ts";
import * as body from "./body.ts";
import * as eyes from "./eyes.ts";
import * as glasses from "./glasses.ts";
import * as hair from "./hair.ts";
import * as head from "./head.ts";
import * as mouth from "./mouth.ts";
import * as mustache from "./mustache.ts";

/**
 * Generates an SVG fragment using the miniavs collection.
 */
function generate(key: number): string {
  return `
  <g>
    ${background.generate(key)}
    ${body.generate(key)}
    ${head.generate(key)}
    ${eyes.generate(key)}
    ${mouth.generate(key)}
    ${mustache.generate(key)}
    ${hair.generate(key)}
    ${glasses.generate(key)}
  </g>
  `;
}

export default { generate };
