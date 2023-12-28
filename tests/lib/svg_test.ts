// @ts-nocheck Disable type checking; we're testing the runtime behaviour.

import {
  assert,
  assertEquals,
  assertNotEquals,
  assertRejects,
} from "../test_deps.ts";
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

  await t.step(
    "it generates an svg clip path with the default radius",
    async () => {
      const regex = new RegExp('<rect [^>]+ rx="0" ry="0"', "is");
      const svg = (await generate("test")).trim();
      assert(regex.test(svg));
    },
  );

  await t.step(
    "it generates an svg clip path with the given radius",
    async () => {
      const regex = new RegExp('<rect [^>]+ rx="10" ry="10"', "is");
      const svg = (await generate("test", { radius: 10 })).trim();
      assert(regex.test(svg));
    },
  );

  await t.step("it treats the radius as an absolute value", async () => {
    // 64 is the default size, 256 is the given size, 10 is the desired radius.
    const radius = (64 / 256) * 10;
    const regex = new RegExp(`<rect [^>]+ rx="${radius}" ry="${radius}"`, "is");
    const svg = (await generate("test", { size: 256, radius: 10 })).trim();
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
