import React, { useState, useEffect } from "react";
import {
  fetchPostByIdUsingCallback,
  fetchPostByIdUsingPromise,
} from "../api/01-get-post";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const CB = (data) => {
    console.log("Callback", data);
  };

  useEffect(() => {
    // fetchPostByIdUsingCallback(count, CB);
    fetchPostByIdUsingPromise(count).then((data) =>
      console.log("data from promise", data)
    );
  }, [count]);

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}> Add </button>
      <button onClick={() => setCount(count - 1)}> Minus </button>
    </>
  );
};
