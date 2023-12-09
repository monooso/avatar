import z from "https://deno.land/x/zod@v3.22.4/index.ts";

/**
 * Generates a reproducible numeric key from the given seed string. Raises if the seed is invalid.
 */
async function generate(seed: string): Promise<number> {
  seed = z.string().trim().min(1).parse(seed);

  const encoder = new TextEncoder();
  const data = encoder.encode(seed);

  const buffer = await crypto.subtle.digest("SHA-256", data);
  const bytes = Array.from(new Uint8Array(buffer));

  return bytes.reduce((sum, byte) => sum + byte);
}

export { generate };
