import React from "react";
import {TEXT} from "../text";

const { NAVBAR } = TEXT;

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
            <h4>{language === TEXT.JP_LANG ? NAVBAR.JP.HOME : NAVBAR.ENG.HOME}</h4>
          </button>
        </ul>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("sudoku")}
            >
              {language === TEXT.JP_LANG ? NAVBAR.JP.SUDOKU : NAVBAR.ENG.SUDOKU}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("passwordGen")}
            >
              {language === TEXT.JP_LANG ? NAVBAR.JP.PASS_GEN : NAVBAR.ENG.PASS_GEN}
            </button>
          </li>
        </ul>
        <div className="navbar-nav">
          <select value={language} onChange={handleLanguageChange}>
            <option value={TEXT.ENG_LANG} key={TEXT.ENG_LANG}>
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
