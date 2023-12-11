import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.object({
  radius: z.number().int().min(0).default(0),
  size: z.number().int().min(1).default(64),
});

type Options = z.input<typeof validator>;

/**
 * Validates and normalizes the given options. Raises if validation fails.
 */
function validate(opts: Options): Options {
  return validator.parse(opts);
}

export { validate };
export type { Options };
