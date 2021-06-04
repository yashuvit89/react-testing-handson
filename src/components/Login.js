import React, { useState } from "react";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("On submit:", name, password);
  };

  const onNameChange = (e) => setName(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input id="name" name="name" type="text" onChange={onNameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={onPasswordChange}
            />
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
