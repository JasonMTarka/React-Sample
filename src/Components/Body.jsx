import React from "react";

import Home from "./home";
import Sudoku from "./Sudoku/sudokuSolver";
import PasswordGen from "./PassGen/passwordGen";

export default function Body({currentPage, language}) {
  return (
    <div>
      <div>
        <div>
          {currentPage === "home" ? (
            <Home language={language} />
          ) : (
            null
          )}
        </div>
        <div>
          {currentPage === "sudoku" ? (
            <Sudoku language={language} />
          ) : (
            null
          )}
        </div>
        <div>
          {currentPage === "passwordGen" ? (
            <PasswordGen language={language} />
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
}
