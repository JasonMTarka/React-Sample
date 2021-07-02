function NavBar(props) {
  const navButtonPressed = (buttonName) => {
    props.updatePage(buttonName);
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-center">
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => navButtonPressed("home")}
        >
          <h4>Home</h4>
        </button>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("sudoku")}
            >
              Sudoku Solver
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("passwordGen")}
            >
              Password Generator
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
