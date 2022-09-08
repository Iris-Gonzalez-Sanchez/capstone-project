import { Link } from "react-router-dom";


function Navigation({ currentUser, updateUser }) {
  const handleLogOut = () => {

    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(false);
  };


    return (
        <nav>
            {/* <h1> Libertas Token </h1> */}
            
            {currentUser ? (
            <div>
            <Link to="/">
                Home
            </Link>

            <Link to="/stocks">
                Stocks
             </Link>

            <Link to={`/users`}>
                User Page
            </Link>

            <Link onClick={handleLogOut} to="/">
                Log Out
            </Link>
            </div>
            ) : (
            <div>
            <Link to="/">
                Home
            </Link>

            <Link to="/stocks">
                Stocks
            </Link>

            <Link to="/signup">
                Signup
            </Link>
            </div>
            )}
            
            {currentUser ? (
            <h4>{currentUser.username}</h4>
            ) : (
            <Link
              to="/login"
            //   style={{ color: "inherit", textDecoration: "inherit" }}
            >
            <h4>Sign In</h4>
            </Link>
          )}
    
        </nav>
    );

}

export default Navigation;