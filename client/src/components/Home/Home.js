import "./Home.css";

function Home({ user }) {
  
    if (user) {
      return <h1>Welcome back, {user.username}!</h1>;
    } else {
      return<>
           <div>
            <div>

                <h2>✨Libertas Token, the freedom to learn. </h2>
              </div>

                <div className="main-container">
                <h2>Use this site to learn stock behaviors and predictions. ✨</h2>
                <div>
                <h3>How to use this site:</h3>
                <h3>Sign in or if new user, Sign up!</h3> 
                <h3>Click the Stock tab above to add stocks you'd like to track onto your UserPage 😄</h3>
                <h4>✨✨Libertas Token, Track Stocks with Ease✨✨</h4>
              </div>

              <div className="gif-here">
              </div>

              </div>

              <div className="footer">
                <h4>🌞Created by: Iris Gonzalez Sanchez🌞</h4>
            </div>
            </div>
            </>
    }
  }
  
  export default Home;