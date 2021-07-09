import React from "react";

import Home from "./home";
import Sudoku from "./Sudoku/sudokuSolver";
import PasswordGen from "./PassGen/passwordGen";

function Body({currentPage, language}) {
  return (
    <div>
      <div>
        <div>
          {currentPage === "home" ? (
            <Home language={language} />
          ) : (
            ""
          )}
        </div>
        <div>
          {currentPage === "sudoku" ? (
            <Sudoku language={language} />
          ) : (
            ""
          )}
        </div>
        <div>
          {currentPage === "passwordGen" ? (
            <PasswordGen language={language} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
