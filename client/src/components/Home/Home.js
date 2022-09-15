import "./Home.css";

function Home({ user }) {

  if (user) {
    return <h1>Welcome back, {user.username}!</h1>;
  } else {
    return <>
      <div>
        <div>

          <h2 className="heading">✨Libertas Token, the freedom to learn. </h2>
        </div>

        <div className="main-container">
          <h2 className="sub-heading">Use this site to learn stock behaviors and predictions. ✨</h2>
          <div className="textBox">
            <h3>How to use this site:</h3>
            <h3>Sign in or if new user, Sign up!</h3>
            <h3>Once logged in, add stocks to your account via search bar on the left ☀️</h3>
            <h3>On the right of your User Page, you can click on any of your stocks to watch the stock price update in real time 😁</h3>
            <h4>✨✨Libertas Token, Track Stocks with Ease✨✨</h4>
          </div>
          {/* 
          <div className="gif-container">
            <div className="gif-here">
            </div>
          </div> */}

          <img className="gif-here" src="https://media3.giphy.com/media/3o7buf6dkxZUWiHVW8/giphy.gif?cid=790b76115c9afdae28b1ddf6efdb37a4991a0e47148b84a7&rid=giphy.gif&ct=g" alt="logo"></img>

        </div>

        <div className="footer">
          <h4>🌞Created by: Iris Gonzalez Sanchez🌞</h4>
        </div>
      </div>
    </>
  }
}

export default Home;