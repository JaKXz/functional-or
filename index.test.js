import { test } from "uvu";
import * as assert from "uvu/assert";

import or from "./index.js";

test("returns a function", () => {
  assert.instance(or(), Function);
});

test("accepts data without functions", () => {
  const subject = or();

  assert.is(subject(true, false, false, true), true);
});

test("partial application takes functions", () => {
  const subject = or(
    () => true,
    () => false,
    () => 0,
    () => "foo"
  );

  assert.is(subject([]), true);
});

test("throws when partial application is not given only functions", () => {
  const subject = or(
    () => true,
    "test",
    () => {},
    null
  );

  assert.throws(() => subject());
});

test("does not throw when one of the predicate functions fails for whatever reason", () => {
  const subject = or(
    () => {
      throw new Error("BOOM");
    },
    () => false
  );

  assert.is(subject([]), false);
});

test.run();
