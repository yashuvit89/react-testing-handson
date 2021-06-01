import { fetchPostByIdUsingCallback } from "../../api/01-get-post";
/* 
    Link - https://jestjs.io/docs/asynchronous
*/

/**
 * Never do this
 *
 * Why doesn't it work? -> By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:
 */

test("never do this", () => {
  function callback(data) {
    expect(data).toBe("peanut butter");
  }
  fetchPostByIdUsingCallback(callback, 1);
});

// Correct way
test("how it should be done", (done) => {
  const myMockFn = jest.fn((cb) => cb(true));

  function callback(data) {
    try {
      console.log("Inside callback");
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      console.log("Inside error", error);
      done(error);
    }
  }
  fetchPostByIdUsingCallback(callback, 1);
});
