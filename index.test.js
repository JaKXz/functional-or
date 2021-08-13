const or = require("./");

test("returns a function", () => {
  expect(or()).toBeInstanceOf(Function);
});

test("accepts data without functions", () => {
  const subject = or();

  expect(subject(true, false, false, true)).toBe(true);
});

test("partial application takes functions", () => {
  const subject = or(
    () => true,
    () => false,
    () => 0,
    () => "foo",
  );

  expect(subject([])).toBe(true);
});

test("throws when partial application is not given only functions", () => {
  const subject = or("test", () => {}, null);

  expect(() => subject()).toThrow();
});

test("does not throw when one of the predicate functions fails for whatever reason", () => {
  const subject = or(
    () => {
      throw new Error("BOOM");
    },
    () => false,
  );

  expect(subject([])).toBe(false);
});
