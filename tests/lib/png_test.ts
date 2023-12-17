// @ts-nocheck Disable type checking; we're testing the runtime behaviour.

import {
  assert,
  assertEquals,
  assertNotEquals,
  assertRejects,
} from "../test_deps.ts";
import { generate } from "../../lib/png.ts";

/**
 * Returns a boolean indicating whether the given Uint8Array represents a PNG.
 * Works by checking the PNG magic number (https://en.wikipedia.org/wiki/PNG).
 */
function isPng(buffer: Uint8Array): boolean {
  const magic = ["89", "50", "4e", "47", "0d", "0a", "1a", "0a"].map((hex) =>
    parseInt(hex, 16)
  );
  const arr = Array.from(buffer.slice(0, 8));
  return JSON.stringify(arr) === JSON.stringify(magic);
}

Deno.test("png", async (t) => {
  await t.step("it returns a Uint8Array containing a PNG..?", async () => {
    const png = await generate("test");
    assert(png instanceof Uint8Array);
    assert(isPng(png));
  });
});
