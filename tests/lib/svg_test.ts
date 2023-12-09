// @ts-nocheck Disable type checking; we're testing the runtime behaviour.

import {
  assert,
  assertEquals,
  assertNotEquals,
  assertRejects,
} from "https://deno.land/std@0.208.0/assert/mod.ts";
import { generate } from "../../lib/svg.ts";

Deno.test("svg", async (t) => {
  await t.step("it returns an svg string", async () => {
    const regex = new RegExp("^<svg.*</svg>$", "is");
    const svg = (await generate("test")).trim();
    assert(regex.test(svg));
  });

  await t.step("it generates the same svg for the same seed", async () => {
    assertEquals(await generate("a"), await generate("a"));
  });

  await t.step("it generates a different svg for different seeds", async () => {
    assertNotEquals(await generate("a"), await generate("b"));
  });

  await t.step("it generates an svg with the default size", async () => {
    const regex = new RegExp('^<svg width="64" height="64"', "is");
    const svg = (await generate("test")).trim();
    assert(regex.test(svg));
  });

  await t.step("it generates an svg with the given size", async () => {
    const regex = new RegExp('^<svg width="128" height="128"', "is");
    const svg = (await generate("test", { size: 128 })).trim();
    assert(regex.test(svg));
  });

  // keys_test.ts covers the seed validation, this is just a sanity check.
  await t.step("it raises if the seed is invalid", () => {
    assertRejects(() => generate(1));
  });

  // options_test.ts covers the seed validation, this is just a sanity check.
  await t.step("it raises if the given options are invalid", () => {
    assertRejects(() => generate("test", { size: "invalid" }));
  });
});
