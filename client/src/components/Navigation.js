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
          <div className="truman">
            <Link
              to="/stocks"
              // activeClassName="active-link"
              onClick={() => closeMenu()}
              exact='true'
            >
              Stocks
            </Link>

            <Link
              to={`/users`}
              // activeClassName="active-link"
              onClick={() => closeMenu()}
              exact='true'
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
          <div className="jr">
            <Link className="something"
              to="/"
              // activeClassName="active-link"
              onClick={() => closeMenu()}
              exact='true'
            >
              Home
            </Link>

            <Link className="something"
              to="/stocks"
              // activeClassName="active-link"
              onClick={() => closeMenu()}
              exact='true'
            >
              Stock Listing
            </Link>

            <Link className="something"
              to="/signup"
              // activeClassName="active-link"
              onClick={() => closeMenu()}
              exact='true'
            >
              Sign Up
            </Link>
          </div>
        )}

          {!currentUser ? (
              <div className="jr">
              <Link className="something"
                to="/login"
                // activeClassName="active-link"
                onClick={() => closeMenu()}
                exact='true'
                //   style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Sign In
              </Link>
              </div>) : (
            <h4 className="announce-user">Welcome {currentUser.username}!</h4>
          
          )}

        {/* {currentUser ? (
          <h4 className="announce-user">Welcome {currentUser.username}!</h4>
        ) : (
          <div className="jr">
          <Link className="something"
            to="/login"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
            //   style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Sign In
          </Link>
          </div>
        )} */}
      </ul>
    </nav>
  );
}

export default Navigation;
