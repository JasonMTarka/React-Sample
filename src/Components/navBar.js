function NavBar(props) {
  const navButtonPressed = (buttonName) => {
    props.updatePage(buttonName);
  };

  const handleLanguageChange = (event) => {
    props.updateLanguage(event.target.value);
  };

  const text = {
    eng: {
      home: "Home",
      sudoku: "Sudoku Solver",
      passGen: "Password Generator",
    },
    jp: {
      home: "ホームページ",
      sudoku: "数独自動解決アプリ",
      passGen: "パスワード自動生成アプリ",
    },
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-center">
      <div className="container">
        <ul className="navbar-nav w-100">
          <button
            className="btn btn-primary row"
            onClick={() => navButtonPressed("home")}
          >
            <h4>{props.language === "jp" ? text.jp.home : text.eng.home}</h4>
          </button>
        </ul>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("sudoku")}
            >
              {props.language === "jp" ? text.jp.sudoku : text.eng.sudoku}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("passwordGen")}
            >
              {props.language === "jp" ? text.jp.passGen : text.eng.passGen}
            </button>
          </li>
        </ul>
        <div className="navbar-nav">
          <select value={props.language} onChange={handleLanguageChange}>
            <option value="eng" key="eng">
              English
            </option>
            <option value="jp" key="jp">
              日本語
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
