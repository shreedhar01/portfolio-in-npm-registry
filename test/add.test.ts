import { expect, test } from "vitest";
import { add } from "../src/index";

test("Sum of 1 and 2 is 3", () => {
  expect(add(1, 2)).toBe(3);
});
