import React, { useState } from "react";
import Sudoku from "./sudokuSolverLogic";
import Row from "./Row";

export default function Form ({language}) {

  const text = {
    eng: {
      solve: "Solve",
      reset: "Reset",
    },
    jp: {
      solve: "解決する",
      reset: "リセット",
    },
  }

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
          {language === "jp"
            ? text.jp.solve
            : text.eng.solve}
        </button>
        <button
          className="col ml-2 btn btn-secondary"
          onClick={resetSudoku}
        >
          {language === "jp"
            ? text.jp.reset
            : text.eng.reset}
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

