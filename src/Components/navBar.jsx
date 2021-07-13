import React from "react";

import { NAVBAR_TXT as TEXT } from "../Text/navBarText";
import { LANGUAGES } from "../Text/languages";


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
            <h4>{language === LANGUAGES.JP ? TEXT.JP.HOME : TEXT.ENG.HOME}</h4>
          </button>
        </ul>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item active">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("sudoku")}
            >
              {language === LANGUAGES.JP ? TEXT.JP.SUDOKU : TEXT.ENG.SUDOKU}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary"
              onClick={() => navButtonPressed("passwordGen")}
            >
              {language === LANGUAGES.JP ? TEXT.JP.PASS_GEN : TEXT.ENG.PASS_GEN}
            </button>
          </li>
        </ul>
        <div className="navbar-nav">
          <select value={language} onChange={handleLanguageChange}>
            <option value={LANGUAGES.ENG} key={LANGUAGES.ENG}>
              English
            </option>
            <option value={LANGUAGES.JP} key={LANGUAGES.JP}>
              日本語
            </option>
          </select>
        </div>
      </div>
    </nav>
  );
}
