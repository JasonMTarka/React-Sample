import { useState, useEffect, useRef } from "react";
// import axios from "axios";

import Sudoku from "./sudokuSolverLogic";
import Row from "./Row";
import { SUDOKU_TXT as TEXT } from "../../Text/sudokuText";
import { LANGUAGES } from "../../Text/defaults";
import { Props } from "../../types/common";
import { GRIDS } from "./Grids";

export default function Form({ language }: Props) {
  const [sudoku, setSudoku] = useState<Sudoku>();
  const prevSudoku = useRef<number[][]>();
  const loading = useRef(true);

  // URL for Sudoku API (not working as of 2022/10/24)
  //const baseApiUrl = "https://sugoku.herokuapp.com/board?difficulty=";

  useEffect(() => {
    let isMounted = true;
    // Use following to get grids from API when working:
    // axios.get(baseApiUrl + "easy").then((response) => {
    //   if (isMounted) {
    //     setSudoku(new Sudoku(response.data.board));
    //   }
    // });
    let grids: number[][][] = [];
    grids = GRIDS["easy"];
    if (isMounted) {
      setSudoku(new Sudoku(grids[Math.floor(Math.random() * grids.length)]));
    }

    loading.current = false;
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (sudoku) {
      if (!sudoku.solvedSudoku) {
        prevSudoku.current = sudoku.originalGrid;
      }
    }
  }, [sudoku]);

  const resetSudoku = () => {
    if (prevSudoku?.current) {
      const newSudoku = new Sudoku(prevSudoku.current);
      setSudoku(newSudoku);
    }
  };

  const solveSudoku = () => {
    if (sudoku) {
      if (sudoku.solvedSudoku) {
        return;
      }
      const newSudoku = new Sudoku(sudoku.grid);
      newSudoku.solve();
      setSudoku(newSudoku);
    }
  };

  const handleDifficultyChange = (event: any) => {
    const choice = event.target.value;
    let grids: number[][][] = [];
    if (choice === TEXT.ENG.DIFFICULTIES.EASY) {
      grids = GRIDS["easy"];
    } else if (choice === TEXT.ENG.DIFFICULTIES.MEDIUM) {
      grids = GRIDS["med"];
    } else if (choice === TEXT.ENG.DIFFICULTIES.HARD) {
      grids = GRIDS["hard"];
    }
    const sudoku = new Sudoku(grids[Math.floor(Math.random() * grids.length)]);
    setSudoku(sudoku);
  };

  const renderGrid = () => {
    const fieldRows = [];
    let keyCounter = 0;

    if (sudoku) {
      for (const row of sudoku.grid) {
        fieldRows.push(
          <div key={keyCounter}>
            <Row row={row} />
          </div>
        );
        keyCounter++;
      }
      return fieldRows;
    }
  };

  return (
    <div>
      <div>{loading.current ? "Loading..." : renderGrid()}</div>
      <div className="btn-toolbar mt-3">
        <button
          className="col btn btn-primary"
          onClick={solveSudoku}
          disabled={loading.current}
        >
          {language === LANGUAGES.JP ? TEXT.JP.SOLVE : TEXT.ENG.SOLVE}
        </button>
        <button
          className="col ml-2 btn btn-secondary"
          onClick={resetSudoku}
          disabled={loading.current}
        >
          {language === LANGUAGES.JP ? TEXT.JP.RESET : TEXT.ENG.RESET}
        </button>
      </div>
      <div className="mt-3">
        {sudoku ? (
          <>
            <select
              className="col form-select"
              onChange={handleDifficultyChange}
              disabled={loading.current}
            >
              <option value={TEXT.ENG.DIFFICULTIES.EASY}>
                {language === LANGUAGES.JP
                  ? TEXT.JP.DIFFICULTIES.EASY
                  : TEXT.ENG.DIFFICULTIES.EASY}
              </option>
              <option value={TEXT.ENG.DIFFICULTIES.MEDIUM}>
                {language === LANGUAGES.JP
                  ? TEXT.JP.DIFFICULTIES.MEDIUM
                  : TEXT.ENG.DIFFICULTIES.MEDIUM}
              </option>
              <option value={TEXT.ENG.DIFFICULTIES.HARD}>
                {language === LANGUAGES.JP
                  ? TEXT.JP.DIFFICULTIES.HARD
                  : TEXT.ENG.DIFFICULTIES.HARD}
              </option>
            </select>
            <small>
              {language === LANGUAGES.JP
                ? TEXT.JP.HARD_WARNING
                : TEXT.ENG.HARD_WARNING}
            </small>
          </>
        ) : null}
      </div>
    </div>
  );
}
