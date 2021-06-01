export const fetchPostByIdUsingCallback = (id, callback) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then(callback);
};
