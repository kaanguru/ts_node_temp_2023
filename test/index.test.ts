import { expect,expectTypeOf, test } from "vitest";
import { addTwo } from "../src/index";

test("addTwo", () => {
  const result = addTwo(3);
  expect(result).toBe(5);
});
