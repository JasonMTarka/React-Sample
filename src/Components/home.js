function Home(props) {
  return (
    <div className="container">
      <h3>About this Site</h3>
      <p>This is a sample React website created by Jason Tarka at HUI.</p>
      <p>
        This is a Single Page Application (SPA) using React components to
        dynamically display data without repeated HTTP requests.
      </p>
      <p>
        By clicking the buttons on the navigation bar above, you can load new
        components into this space. As an example, I have included some small
        applications I created for learning purposes.
      </p>
      <p>
        The formatting for this website is done through Bootstrap, an
        open-source CSS framework.
      </p>
    </div>
  );
}

export default Home;
