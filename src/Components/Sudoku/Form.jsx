import React, { useState } from "react";

import Sudoku from "./sudokuSolverLogic";
import Row from "./Row";
import {SUDOKU_TXT as TEXT} from "../../Text/sudokuText";
import { LANGUAGES } from "../../Text/languages";


export default function Form ({language}) {

  const [sudoku, setSudoku] = useState(new Sudoku())

  const resetSudoku = () => {
    setSudoku(new Sudoku(sudoku.difficulty));
  }

  const solveSudoku = () => {
    let newSudoku = new Sudoku(sudoku.difficulty);
    newSudoku.solve();
    setSudoku(newSudoku);
  }

  const handleDifficultyChange = (event) => {
    setSudoku(new Sudoku(event.target.value));
  }

  const renderGrid = () => {
    let fieldRows = [];
    let keyCounter = 0;
    for (let row of sudoku.grid) {
      fieldRows.push(
        <div key={keyCounter}>
          <Row row={row} />
        </div>
      );
      keyCounter++;
    }
    return fieldRows;
  }

  const renderDifficultyOptions = () => {
    return Object.keys(sudoku._sudokus).map(option => (
      <option key={option}>{option}</option>
    ));
    
  }

  return (
    <div>
      <div>{renderGrid()}</div>
      <div className="btn-toolbar mt-3">
        <button className="col btn btn-primary" onClick={solveSudoku}>
          {language === LANGUAGES.JP
            ? TEXT.JP.SOLVE
            : TEXT.ENG.SOLVE}
        </button>
        <button
          className="col ml-2 btn btn-secondary"
          onClick={resetSudoku}
        >
          {language === LANGUAGES.JP
            ? TEXT.JP.RESET
            : TEXT.ENG.RESET}
        </button>
      </div>
      <div className="mt-3">
        <select
          className="col form-select"
          value={sudoku.difficulty}
          onChange={handleDifficultyChange}
        >
          {renderDifficultyOptions()}
        </select>
      </div>
    </div>
  );
}

