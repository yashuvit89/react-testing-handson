import {
  fetchPostByIdUsingCallback,
  fetchPostByIdUsingPromise,
  fetchReject,
  fetchThrowError,
} from "../../api/01-get-post";
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

// TODO: Fix this, skipping for now
xtest("how it should be done", (done) => {
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

// If fetch returns promises
test("Using promises", () => {
  return fetchPostByIdUsingPromise(1).then((data) => {
    expect(data.id).toBe(1);
  });
});

// Throw error
test("the fetch fails with error", () => {
  expect.assertions(1);
  return fetchReject().catch((e) => expect(e).toBeTruthy());
});

// .resovles/.rejects
test("resolves", () => {
  return expect(fetchPostByIdUsingPromise(1)).resolves.toMatchObject({
    id: 1,
  });
});

// reject
test("reject", () => {
  return expect(fetchThrowError()).rejects.toMatch("error");
});
