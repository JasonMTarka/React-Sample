interface DefaultLanguages {
  JP: SupportedLanguage
  ENG: SupportedLanguage
}

export const LANGUAGES: DefaultLanguages = {
  JP: "jp",
  ENG: "eng",
};

export type SupportedLanguage = "jp" | "eng"

export const PAGES = {
  HOME: "home",
  SUDOKU: "sudoku",
  PASS_GEN: "passGen",
  TRACKER: "covidCaseTracker",
};
