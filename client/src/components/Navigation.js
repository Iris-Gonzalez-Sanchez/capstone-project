import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Navigation({ currentUser, updateUser }) {
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(false);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: "#7b7b7b", width: "40px", height: "210px" }}
          />
        ) : (
          <FiMenu
            style={{ color: "#7b7b7b", width: "40px", height: "210px" }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {currentUser ? (
          <div>
            <Link
              to="/stocks"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Stocks
            </Link>

            <Link
              to={`/users`}
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              User Page
            </Link>

            <Link
              onClick={handleLogOut}
              to="/"
              // activeClassName="active-link"
              // onClick={() => closeMenu()}
              // exact
            >
              Log Out
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>

            <Link
              to="/stocks"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Stock Listing
            </Link>

            <Link
              to="/signup"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Sign Up
            </Link>
          </div>
        )}

        {currentUser ? (
          <h4 className="announce-user">Welcome {currentUser.username}!</h4>
        ) : (
          <Link
            to="/login"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
            //   style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Sign In
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
