export const URL = `https://jsonplaceholder.typicode.com/posts`;

export const fetchPostByIdUsingCallback = (id, callback) => {
  return fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then(callback);
};

export const fetchPostByIdUsingPromise = (id) => {
  return fetch(`${URL}/${id}`).then((response) => response.json());
};

export const fetchReject = () => {
  return fetch(`https://asdlfkjsd`).then((response) => response.json());
};

export const fetchThrowError = () => {
  try {
    throw new Error("error");
  } catch (e) {}
};
