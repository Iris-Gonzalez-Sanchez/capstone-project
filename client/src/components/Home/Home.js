import "./Home.css";

function Home({ user }) {
  
    if (user) {
      return <h1>Welcome back, {user.username}!</h1>;
    } else {
      return<>
            <div className="homepage-container">
              <div className="section">
           
                <h2>✨Libertas Token, the freedom to learn. Use this site to learn stock behaviors and predictions. ✨</h2>
              </div>

              <div className="section-bg1">
                <h3 className="reveal-up">How to use this site:</h3>
                <h3 className="reveal-up">Sign in or if new user, Sign up!</h3> 
                <h3 className="reveal-up">Click the Stock tab above to add stocks you'd like to track onto your UserPage 😄</h3>
                <h4 className="reveal-up"> Happy Tracking! * Insert Image / Gif of Features to Expect Here*</h4>
              </div>

              <div className="section-bg2">
                <h4 className="reveal-up">✨✨Libertas Token, Track Stocks with Ease✨✨</h4>
              </div>
              <div className="spacer">
                <h4>Created by: Iris Gonzalez Sanchez</h4>
              </div>
            </div>
            </>
    }
  }
  
  export default Home;