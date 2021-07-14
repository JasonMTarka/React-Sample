import React from "react";

import Home from "./home";
import Sudoku from "./Sudoku/sudokuSolver";
import PasswordGen from "./PassGen/passwordGen";
import { PAGES } from "../Text/defaults";

export default function Body({ currentPage, language }) {
  return (
    <div>
      <div>
        <div>
          {currentPage === PAGES.HOME ? <Home language={language} /> : null}
        </div>
        <div>
          {currentPage === PAGES.SUDOKU ? <Sudoku language={language} /> : null}
        </div>
        <div>
          {currentPage === PAGES.PASS_GEN ? (
            <PasswordGen language={language} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
