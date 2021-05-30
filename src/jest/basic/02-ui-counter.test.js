function sum(a, b) {
  return a + b;
}

test("two numbers should add up correctly", () => {
  expect(sum(1, 4)).toBe(5);
});
