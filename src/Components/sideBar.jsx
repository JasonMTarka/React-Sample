import React from "react";

const TEXT = {
  JP_LANG : "jp",
  ENG_LANG : "eng",
  ENG: {
    HOME_PAGE_NAME: "Home",
    HOME_DESC:
      "You can view this site's source code at the Github link below.  Also, you can see the source code for each page by following each page's code link.",
    HOME_CODE_TEXT: "Website Code - Github",
    SUDOKU_PG_NAME: "Sudoku Solver",
    SUDOKU_DESC:
      "A sudoku solver which uses recursion and backtracking to find the solution.",
    SUDOKU_CODE_TEXT: "Sudoku Code - Github",
    SUDOKU_COMP_TEXT: "Sudoku Form Component - Github",
    PASS_DESC:
      "A password generator which generates a random password based on user input, including which character sets to include, minimum amounts of numbers and symbols, and password lENGth.",
    PASS_CODE_TEXT: "Password Logic - Github",
    PASS_COMP_TEXT: "Password Form Component - Github",
  },
  JP: {
    HOME_PAGE_NAME: "ホームページ",
    HOME_DESC:
      "本サイトのソースコードは以下のリンクを押せばご覧になります。また、各ページのコードリンクを押せば、そのページのソースコードが見えます。",
    HOME_CODE_TEXT: "本サイトのソースコード・Github",
    SUDOKU_PG_NAME: "数独自動解決アプリ",
    SUDOKU_DESC: "再帰のアルゴリズムにより、数独を自動的に解決するアプリ。",
    SUDOKU_CODE_TEXT: "数独自動解決アプリのソースコード・Github",
    SUDOKU_COMP_TEXT: "数独のReactコンポーネント・Github",
    PassGenPageName: "パスワード自動生成アプリ",
    PASS_DESC:
      "ユーザーの記入した情報に基づいて自動的にパスワードを作成するアプリ。",
    PASS_CODE_TEXT: "パスワードアプリのソースコード・Github",
    PASS_COMP_TEXT: "パスワードアプリのReactコンポーネント・Github",
  },
};

const SIDE_BAR = {
    EMAIL: "jasonmtarka@gmail.com",
    HUI_TEXT: "HUI",
    HUI_LINK: "https://hui.co.jp/",
  }; 

export default function SideBar({currentPage, language}) {

  switch (currentPage) {
    case "home": 
      SIDE_BAR["pageName"] =
        language === TEXT.JP_LANG ? TEXT.JP.HOME_PAGE_NAME : TEXT.ENG.HOME_PAGE_NAME;
      SIDE_BAR["description"] =
        language === TEXT.JP_LANG ? TEXT.JP.HOME_DESC : TEXT.ENG.HOME_DESC;
      SIDE_BAR["codeText"] =
        language === TEXT.JP_LANG ? TEXT.JP.HOME_CODE_TEXT : TEXT.ENG.HOME_CODE_TEXT;
      SIDE_BAR["codeLink"] = "https://github.com/JasonMTarka/React-Sample";
      break;
    case "sudoku":
      SIDE_BAR["pageName"] =
        language === TEXT.JP_LANG
          ? TEXT.JP.SUDOKU_PG_NAME
          : TEXT.ENG.SUDOKU_PG_NAME;
      SIDE_BAR["description"] =
        language === TEXT.JP_LANG ? TEXT.JP.SUDOKU_DESC : TEXT.ENG.SUDOKU_DESC;
      SIDE_BAR["codeText"] =
        language === TEXT.JP_LANG
          ? TEXT.JP.SUDOKU_CODE_TEXT
          : TEXT.ENG.SUDOKU_CODE_TEXT;
      SIDE_BAR["codeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/sudokuSolverLogic.js";
      SIDE_BAR["componentCodeText"] =
        language === TEXT.JP_LANG
          ? TEXT.JP.SUDOKU_COMP_TEXT
          : TEXT.ENG.SUDOKU_COMP_TEXT;
      SIDE_BAR["componentCodeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/Form.jsx";
      break;
    case "passwordGen":
      SIDE_BAR["pageName"] =
        language === TEXT.JP_LANG
          ? TEXT.JP.PassGenPageName
          : TEXT.ENG.PassGenPageName;
      SIDE_BAR["description"] =
        language === TEXT.JP_LANG ? TEXT.JP.PASS_DESC : TEXT.ENG.PASS_DESC;
      SIDE_BAR["codeText"] =
        language === TEXT.JP_LANG
          ? TEXT.JP.PASS_CODE_TEXT
          : TEXT.ENG.PASS_CODE_TEXT;
      SIDE_BAR["codeLink"] =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PassGen/passwordGenLogic.js";
      SIDE_BAR["componentCodeText"] =
        language === TEXT.JP_LANG
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
