import React, { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import UserPage from "./components/Userpage/UserPage";
import Navigation from "./components/Navigation/Navigation";

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

  // if (errors) return <h1>{errors}</h1>;

  return (
    <>
      <h1 className="project-title"> Libertas Token </h1>

      <Navigation currentUser={currentUser} updateUser={updateUser} />
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
