import { LANGUAGES, PAGES } from "../Text/defaults";
import { SIDEBAR_TXT as TEXT } from "../Text/sideBarText";
import { Props } from "../types/common";

interface SideBarProps extends Props {
  currentPage: string
}

interface SideBarTextInterface {
  EMAIL: string
  HUI_TEXT: string
  HUI_LINK: string
  PAGE_NAME?: string
  DESC?: string
  CODE_TEXT?: string
  CODE_LINK?: string
  COMP_LINK?: string
  COMP_TEXT?: string
}

const SIDE_BAR: SideBarTextInterface = {
    EMAIL: "jasonmtarka@gmail.com",
    HUI_TEXT: "HUI",
    HUI_LINK: "https://hui.co.jp/"
  };

export default function SideBar({ currentPage, language }: SideBarProps) {
  switch (currentPage) {
    case PAGES.HOME:
      SIDE_BAR.PAGE_NAME =
        language === LANGUAGES.JP ? TEXT.JP.HOME.NAME : TEXT.ENG.HOME.NAME;
      SIDE_BAR.DESC =
        language === LANGUAGES.JP ? TEXT.JP.HOME.DESC : TEXT.ENG.HOME.DESC;
      SIDE_BAR.CODE_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.HOME.CODE_TEXT
          : TEXT.ENG.HOME.CODE_TEXT;
      SIDE_BAR.CODE_LINK = "https://github.com/JasonMTarka/React-Sample";
      SIDE_BAR.COMP_LINK = "";
      SIDE_BAR.COMP_TEXT = "";
      break;

    case PAGES.SUDOKU:
      SIDE_BAR.PAGE_NAME =
        language === LANGUAGES.JP ? TEXT.JP.SUDOKU.NAME : TEXT.ENG.SUDOKU.NAME;
      SIDE_BAR.DESC =
        language === LANGUAGES.JP ? TEXT.JP.SUDOKU.DESC : TEXT.ENG.SUDOKU.DESC;
      SIDE_BAR.CODE_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.SUDOKU.CODE_TEXT
          : TEXT.ENG.SUDOKU.CODE_TEXT;
      SIDE_BAR.CODE_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/sudokuSolverLogic.js";
      SIDE_BAR.COMP_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.SUDOKU.COMP_TEXT
          : TEXT.ENG.SUDOKU.COMP_TEXT;
      SIDE_BAR.COMP_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/Sudoku/Form.jsx";
      break;

    case PAGES.PASS_GEN:
      SIDE_BAR.PAGE_NAME =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_GEN.NAME
          : TEXT.ENG.PASS_GEN.NAME;
      SIDE_BAR.DESC =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_GEN.DESC
          : TEXT.ENG.PASS_GEN.DESC;
      SIDE_BAR.CODE_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_GEN.CODE_TEXT
          : TEXT.ENG.PASS_GEN.CODE_TEXT;
      SIDE_BAR.CODE_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PassGen/passwordGenLogic.js";
      SIDE_BAR.COMP_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.PASS_GEN.COMP_TEXT
          : TEXT.ENG.PASS_GEN.COMP_TEXT;
      SIDE_BAR.COMP_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/PassGen/Form.jsx";
      break;

    case PAGES.TRACKER:
      SIDE_BAR.PAGE_NAME =
        language === LANGUAGES.JP
          ? TEXT.JP.TRACKER.NAME
          : TEXT.ENG.TRACKER.NAME;
      SIDE_BAR.DESC =
        language === LANGUAGES.JP
          ? TEXT.JP.TRACKER.DESC
          : TEXT.ENG.TRACKER.DESC;
      SIDE_BAR.CODE_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.TRACKER.CODE_TEXT
          : TEXT.ENG.TRACKER.CODE_TEXT;
      SIDE_BAR.CODE_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/CovidCaseTracker/CovidCaseTracker.jsx";
      SIDE_BAR.COMP_TEXT =
        language === LANGUAGES.JP
          ? TEXT.JP.TRACKER.COMP_TEXT
          : TEXT.ENG.TRACKER.COMP_TEXT;
      SIDE_BAR.COMP_LINK =
        "https://github.com/JasonMTarka/React-Sample/blob/main/src/Components/CovidCaseTracker/TrackerRow.jsx";
      break;

    default:
      throw new Error("Invalid page");
  }

  let componentCode = [];
  if (SIDE_BAR.COMP_LINK) {
    componentCode.push(
      <li
        key="component-code-link"
        className="list-group-item list-group-item-light"
      >
        <a href={SIDE_BAR.COMP_LINK}>{SIDE_BAR.COMP_TEXT}</a>
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
            <p key="desc">{SIDE_BAR.DESC}</p>
          </li>
          <li
            key="sidebar-code-link"
            className="list-group-item list-group-item-light"
          >
            <a key="code-link" href={SIDE_BAR.CODE_LINK}>
              {SIDE_BAR.CODE_TEXT}
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
