// Basic Matchers - https://jestjs.io/docs/using-matchers

// #1 - toBe

function sum(a, b) {
  return a + b;
}

test("two numbers should add up correctly", () => {
  expect(sum(1, 4)).toBe(5);
});

/* 
  2 - toEqual, toStricEqual
  Use toEqual or toStrictEqual for deep checks like objects
*/

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toStrictEqual({ one: 1, two: 2 });
  expect(data).toEqual({ one: 1, two: 2 });
});

/* 
  3 - Truthiness 
  - toBeTruthy, toBeFalsy
  - toBeDefined, toBeUndefined
  - toBeNull
*/

test("Truthiness and Falsy checks", () => {
  const obj = {
    one: 1,
  };

  expect(obj.one).toBeTruthy();
  expect(obj.one).toBeDefined();
  expect(obj.two).not.toBeDefined();
  expect(obj.two).toBeUndefined();
  expect(obj.two).toBeFalsy();
});

/* 
  Numbers
*/

test("numbers", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(10);

  // both are equal for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);

  // floating numbers
  const value1 = 0.2 + 0.5;
  expect(value1).toBeCloseTo(0.7);
});

/* 
  Strings
*/

test("Strings", () => {
  expect("team").not.toMatch(/I/);
  expect("Yaswanth").toMatch(/nth/);
});

/* 
  Arrays
*/

test("Arrays", () => {
  const list = ["Sherlock", "Watson", "Hound"];

  expect(list).toContain("Sherlock");
  expect(list).not.toContain("Bond");
});

/* 
  Exceptions
*/

function someWrongFunction() {
  throw new Error("something wrong");
}

test("Exceptions", () => {
  expect(() => someWrongFunction()).toThrow();
  expect(() => someWrongFunction()).toThrow(Error);

  expect(() => someWrongFunction()).toThrow("something wrong");
  expect(() => someWrongFunction()).toThrow(/wrong/);
});

/* 
  Add toMatchObject, toMatch
*/
