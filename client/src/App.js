import React, { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import UserPage from "./components/Userpage/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setCurrentUser(userData));
      } else {
        // res.json().then((json) => console.log(json));
      }
    });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(false)
  };

  // if (errors) return <h1>{errors}</h1>;

  return (
    <>
 <div className="project-title"> Libertas Token </div>
      {currentUser ? (
        <div className="NavWithUser">
          <a href="/">Home</a>
          <a href={`/users/${currentUser.id}`} >User Page</a>
          <a href="/" onClick={handleLogOut}>Logout</a>
        </div>
      ) : (
        <div className="NavWithoutUser">
          <a href="/">Home</a>
          <a href="/login">Sign in</a>
          <a href="/signup">Sign up</a>
        </div>
      )}
      <Routes>
        <Route path="/signup" element={<SignUp updateUser={updateUser} />} />
        <Route path="/login" element={<Login updateUser={updateUser} />} />

        {currentUser ? (
          <Route
            path="/users/:id"
            element={<UserPage currentUser={currentUser} updateUser={updateUser} />}
          />
        ) : (
          <></>
        )}

        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;