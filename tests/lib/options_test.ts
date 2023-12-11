// @ts-nocheck Disable type checking; we're testing the runtime behavior.

import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.208.0/assert/mod.ts";
import { validate } from "../../lib/options.ts";

Deno.test("validate: radius", async (t) => {
  await t.step("it accepts a non-negative integer", () => {
    let opts;
    opts = validate({ radius: 0 });
    assertEquals(opts.radius, 0);

    opts = validate({ radius: 1 });
    assertEquals(opts.radius, 1);
  });

  await t.step("it defaults to 0 if radius is missing", () => {
    const opts = validate({});
    assertEquals(opts.radius, 0);
  });

  await t.step("it defaults to 0 if radius is undefined", () => {
    const opts = validate({ radius: undefined });
    assertEquals(opts.radius, 0);
  });

  await t.step("it raises if radius is less than zero", () => {
    assertThrows(() => validate({ radius: -1 }));
  });

  await t.step("it raises if radius is not an integer", () => {
    assertThrows(() => validate({ radius: 2.1 }));
    assertThrows(() => validate({ radius: "2" }));
    assertThrows(() => validate({ radius: {} }));
    assertThrows(() => validate({ radius: [] }));
  });
});

Deno.test("validate: size", async (t) => {
  await t.step("it accepts a valid size", () => {
    const opts = validate({ size: 128 });
    assertEquals(opts.size, 128);
  });

  await t.step("it defaults to 64 if size is missing", () => {
    const opts = validate({});
    assertEquals(opts.size, 64);
  });

  await t.step("it defaults to 64 if size is undefined", () => {
    const opts = validate({ size: undefined });
    assertEquals(opts.size, 64);
  });

  await t.step("it raises if size is less than one", () => {
    assertThrows(() => validate({ size: 0 }));
  });

  await t.step("it raises if size is not an integer", () => {
    assertThrows(() => validate({ size: 2.1 }));
    assertThrows(() => validate({ size: "2" }));
    assertThrows(() => validate({ size: {} }));
    assertThrows(() => validate({ size: [] }));
  });

  // Documenting this as a separate test because it's slightly unexpected behaviour.
  await t.step(
    "it does not raise if size is a float that represents an integer",
    () => {
      const opts = validate({ size: 2.0 });
      assertEquals(opts.size, 2);
    },
  );
});
