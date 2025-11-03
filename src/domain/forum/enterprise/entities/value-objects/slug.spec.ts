import { expect, test } from "vitest";
import { Slug } from "./slug";

test("it should create a slug value object", () => {
  const slug = Slug.createFromText("An Example Title!");

  expect(slug.value).toBe("an-example-title");
});
