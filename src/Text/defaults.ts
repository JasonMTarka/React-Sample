export type Language = "jp" | "eng"
export type Page = "home" | "sudoku" | "passGen" | "covidCaseTracker"


interface AvailableLanguages {
  JP: "jp"
  ENG: "eng"
}

interface AvailablePages {
  HOME: "home"
  SUDOKU: "sudoku"
  PASS_GEN: "passGen"
  TRACKER: "covidCaseTracker"
}

export const LANGUAGES: AvailableLanguages = Object.freeze({
  JP: "jp",
  ENG: "eng",
});

export const PAGES: AvailablePages = Object.freeze({
  HOME: "home",
  SUDOKU: "sudoku",
  PASS_GEN: "passGen",
  TRACKER: "covidCaseTracker",
});
