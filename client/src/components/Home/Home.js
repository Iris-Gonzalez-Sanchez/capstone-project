import "./Home.css";

function Home({ user }) {

  if (user) {
    return <h1>Welcome back, {user.username}!</h1>;
  } else {
    return <>
      <div>
        <div>

          <h2 className="heading">✨Upscale your personal freedom✨ </h2>
        </div>

        <div className="main-container">
          <h2 className="sub-heading">✨✨✨✨✨✨✨✨✨✨</h2>
          <div className="textBox">
            <h3 className="list-title">How to use this site:</h3>
            <h3>☀️Sign in or if new user, Sign up!</h3>
            <h3>☀️Add stocks to your account via the search bar </h3>
            <h3>☀️Click on stocks to see a price update in real time</h3>
            <h2 className="sub-heading">✨✨✨✨✨✨✨✨✨✨</h2>

            <h4>✨✨Libertas Token, Track Stocks with Ease✨✨</h4>
          </div>

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