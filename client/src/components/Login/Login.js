import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// import { Form } from "../styled/Form";

function Login({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const { username, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res, "res")
      if (res.ok) {
        res.json().then((user) => {
          console.log(user, "user info")
          updateUser(user);
          navigate(`/users/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(json.error));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value , "Name and Value ")
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
        <div className="login-container">
          <form className="form-data" onSubmit={onSubmit}>
            <h1>Login</h1>
            <label className="login-username" >Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />

            <label className="login-password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="*****"
              onChange={handleChange}
            />

            <button type="submit" value="Log in!" className="log">
              Log In!
            </button>
          </form>
          <div className="login-errors">
            {errors ? <h4>{errors}</h4> : null}
          </div>
        </div>
    
    </>
  );
}

export default Login;
