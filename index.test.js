const functionalOr = require("./");

test("returns a function", () => {
  expect(functionalOr()).toBeInstanceOf(Function);
});

test("accepts data without functions", () => {
  const subject = functionalOr();

  expect(subject(true, false, false, true)).toBe(true);
});

test("partial application takes functions", () => {
  const subject = functionalOr(() => true, () => false, () => 0, () => "foo");

  expect(subject([])).toBe(true);
});

test("throws when partial application is not given only functions", () => {
  const subject = functionalOr("test", () => {}, null);

  expect(() => subject()).toThrow();
});
