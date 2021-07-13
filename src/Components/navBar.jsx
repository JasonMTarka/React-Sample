import React from "react";

const TEXT = {
  JP_LANG : "jp",
  ENG_LANG : "eng",
  ENG: {
    HOME: "Home",
    SUDOKU: "Sudoku Solver",
    PASS_GEN: "Password Generator",
  },
  JP: {
    HOME: "ホームページ",
    SUDOKU: "数独自動解決アプリ",
    PASS_GEN: "パスワード自動生成アプリ",
  },
};

export default function NavBar({language, updateLanguage, updatePage}) {
  const navButtonPressed = (buttonName) => {
    updatePage(buttonName);
  };

  const handleLanguageChange = (event) => {
    updateLanguage(event.target.value);
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary justify-content-center">
      <div className="container">
        <ul className="navbar-nav w-100">
          <button
            className="btn btn-primary row"
            onClick={() => navButtonPressed("home")}
          >
            <h4>{language === TEXT.JP_LANG ? TEXT.JP.HOME : TEXT.ENG.HOME}</h4>
          </button>
        </ul>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("sudoku")}
            >
              {language === TEXT.JP_LANG ? TEXT.JP.SUDOKU : TEXT.ENG.SUDOKU}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("passwordGen")}
            >
              {language === TEXT.JP_LANG ? TEXT.JP.PASS_GEN : TEXT.ENG.PASS_GEN}
            </button>
          </li>
        </ul>
        <div className="navbar-nav">
          <select value={language} onChange={handleLanguageChange}>
            <option value="ENG" key="ENG">
              English
            </option>
            <option value={TEXT.JP_LANG} key={TEXT.JP_LANG}>
              日本語
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}
