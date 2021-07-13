import React from "react";

import { LANGUAGES } from "../Text/languages";
import { SIDEBAR_TXT as TEXT } from "../Text/sideBarText";

const SIDE_BAR = {
    EMAIL: "jasonmtarka@gmail.com",
    HUI_TEXT: "HUI",
    HUI_LINK: "https://hui.co.jp/",
  }; 

export default function SideBar({currentPage, language}) {

  switch (currentPage) {
    case "home": 
      SIDE_BAR["pageName"] =
        language === LANGUAGES.JP ? TEXT.JP.HOME_PAGE_NAME : TEXT.ENG.HOME_PAGE_NAME;
      SIDE_BAR["description"] =
        language === LANGUAGES.JP ? TEXT.JP.HOME_DESC : TEXT.ENG.HOME_DESC;
      SIDE_BAR["codeText"] =
        language === LANGUAGES.JP ? TEXT.JP.HOME_CODE_TEXT : TEXT.ENG.HOME_CODE_TEXT;
      SIDE_BAR["codeLink"] = "https://github.com/JasonMTarka/React-Sample";
      break;
    case "sudoku":
      SIDE_BAR["pageName"] =
        language === LANGUAGES.JP
          ? TEXT.JP.SUDOKU_PG_NAME
          : TEXT.ENG.SUDOKU_PG_NAME;
      SIDE_BAR["description"] =
        language === LANGUAGES.JP ? TEXT.JP.SUDOKU_DESC : TEXT.ENG.SUDOKU_DESC;
      SIDE_BAR["codeText"] =
        language === LANGUAGES.JP
          ? TEXT.JP.SUDOKU_CODE_TEXT
          : TEXT.ENG.SUDOKU_CODE_TEXT;
      SIDE_BAR["codeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/sudokuSolverLogic.js";
      SIDE_BAR["componentCodeText"] =
        language === LANGUAGES.JP
          ? TEXT.JP.SUDOKU_COMP_TEXT
          : TEXT.ENG.SUDOKU_COMP_TEXT;
      SIDE_BAR["componentCodeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/Form.jsx";
      break;
    case "passwordGen":
      SIDE_BAR["pageName"] =
        language === LANGUAGES.JP
          ? TEXT.JP.PassGenPageName
          : TEXT.ENG.PassGenPageName;
      SIDE_BAR["description"] =
        language === LANGUAGES.JP ? TEXT.JP.PASS_DESC : TEXT.ENG.PASS_DESC;
      SIDE_BAR["codeText"] =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_CODE_TEXT
          : TEXT.ENG.PASS_CODE_TEXT;
      SIDE_BAR["codeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PassGen/passwordGenLogic.js";
      SIDE_BAR["componentCodeText"] =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_COMP_TEXT
          : TEXT.ENG.PASS_COMP_TEXT;
      SIDE_BAR["componentCodeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PassGen/Form.jsx";
      break;
    default:
      throw new Error("Invalid page")
  }

  let componentCode = [];
  if (SIDE_BAR.componentCodeLink) {
    componentCode.push(
      <li
        key="component-code-link"
        className="list-group-item list-group-item-light"
      >
        <a href={SIDE_BAR.componentCodeLink}>{SIDE_BAR.componentCodeText}</a>
      </li>
    );
  }

  return (
    <div>
      <div className="content-section">
        <ul key="sidebar-ul" className="list-group">
          <li
            key="sidebar-desc"
            className="list-group-item list-group-item-light"
          >
            <p key="desc">{SIDE_BAR.description}</p>
          </li>
          <li
            key="sidebar-code-link"
            className="list-group-item list-group-item-light"
          >
            <a key="code-link" href={SIDE_BAR.codeLink}>
              {SIDE_BAR.codeText}
            </a>
          </li>
          {componentCode}
          <li
            key="sidebar-hui-link"
            className="list-group-item list-group-item-light"
          >
            <a key="hui-link" href={SIDE_BAR.HUI_LINK}>
              {SIDE_BAR.HUI_TEXT}
            </a>
          </li>
          <li
            key="sidebar-email-link"
            className="list-group-item list-group-item-light"
          >
            {SIDE_BAR.EMAIL}
          </li>
        </ul>
      </div>
    </div>
  );
}
