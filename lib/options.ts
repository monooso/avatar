import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const defaults = { radius: 0, size: 64 };

const validator = z.object({
  radius: z.number().int().min(0).default(defaults.radius),
  size: z.number().int().min(1).default(defaults.size),
});

type InputOptions = z.input<typeof validator>;
type OutputOptions = z.output<typeof validator>;

/**
 * Validates and normalizes the given options. Raises if validation fails.
 */
function validate(opts: InputOptions): OutputOptions {
  return validator.parse(opts);
}

export { defaults, validate };
export type { InputOptions, OutputOptions };
