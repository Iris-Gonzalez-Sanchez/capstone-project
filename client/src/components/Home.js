function Home({ user }) {
    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return<>
            <h1>✨✨Track Stocks with Ease✨✨</h1>
            <h2>✨Brief Description Here✨</h2>
            <h3>Click the tabs above to enter this site 😄</h3>
            <h4>Insert Image / Gif of Features to Expect Here</h4>
            </>
    }
  }
  
  export default Home;