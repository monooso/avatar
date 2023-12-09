// @ts-nocheck Disable type checking; we're testing the runtime behavior.

import {
  assert,
  assertEquals,
  assertNotEquals,
  assertRejects,
} from "https://deno.land/std@0.208.0/assert/mod.ts";
import { generate } from "../../lib/keys.ts";

Deno.test("generate", async (t) => {
  await t.step("it returns an integer", async () => {
    const key = await generate("test");
    assert(Number.isInteger(key));
  });

  await t.step("it raises if the seed is not a string", () => {
    assertRejects(() => generate(123));
  });

  await t.step("it raises if the seed is an empty string", () => {
    assertRejects(() => generate(""));
  });

  await t.step("it raises if the seed is only whitespace", () => {
    assertRejects(() => generate(" "));
  });

  await t.step("it generates the same number for a given seed", async () => {
    assertEquals(await generate("test"), await generate("test"));
  });

  await t.step(
    "it generates different numbers for different seeds",
    async () => {
      assertNotEquals(
        await generate("1"),
        await generate("2"),
        await generate("3"),
        await generate("a"),
        await generate("b"),
        await generate("c"),
      );
    },
  );
});
