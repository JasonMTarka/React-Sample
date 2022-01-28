import { Grid } from "../../types/sudoku"


class Sudoku {
  grid: Grid
  originalGrid: Grid
  solvedSudoku?: Grid

  constructor(grid: Grid) {
    this.grid = grid;
    this.originalGrid = [...grid];
  }

  reset = () => {
    this.grid = this.originalGrid;
  };

  saveSudoku = (grid: Grid) => {
    const solvedSudoku = JSON.parse(JSON.stringify(grid));
    return solvedSudoku;
  };

  solve = () => {
    const setSudoku = () => {
      if (this.solvedSudoku) {
        this.grid = this.solvedSudoku;
      }
    };

    const recursiveSolve = () => {
      const validSpot = (guess: number, x: number, y: number) => {
        if (rowCheck(guess, x)) {
          if (colCheck(guess, y)) {
            if (gridCheck(guess, x, y)) {
              return true;
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
        return false;
      };

      const rowCheck = (guess: number, rowNum: number) => {
        if (this.grid[rowNum - 1].includes(guess)) {
          return false;
        } else {
          return true;
        }
      };

      const colCheck = (guess: number, colNum: number) => {
        const newCol: number[] = [];
        for (const row of this.grid) {
          newCol.push(row[colNum - 1]);
        }

        if (newCol.includes(guess)) {
          return false;
        } else {
          return true;
        }
      };

      const gridCheck = (guess: number, rowNum: number, colNum: number) => {
        function innerGridCheck(gridNum: number, grid: Grid) {
          const _gridfinder = [
            [0, 3, 0, 3],
            [0, 3, 3, 6],
            [0, 3, 6, 9],
            [3, 6, 0, 3],
            [3, 6, 3, 6],
            [3, 6, 6, 9],
            [6, 9, 0, 3],
            [6, 9, 3, 6],
            [6, 9, 6, 9],
          ];

          const sectionBotAndTop = _gridfinder[gridNum - 1];
          const [sectionBot, sectionTop, bot, top] = sectionBotAndTop;
          const gridArray = [];
          for (let i = sectionBot; i < sectionTop; i++) {
            gridArray.push(...grid[i].slice(bot, top));
          }
          if (gridArray.includes(guess)) {
            return false;
          } else {
            return true;
          }
        }

        if (rowNum <= 3) {
          if (colNum <= 3) {
            return innerGridCheck(1, this.grid);
          } else if (colNum >= 4 && colNum < 7) {
            return innerGridCheck(2, this.grid);
          } else {
            return innerGridCheck(3, this.grid);
          }
        } else if (rowNum >= 4 && rowNum < 7) {
          if (colNum <= 3) {
            return innerGridCheck(4, this.grid);
          } else if (colNum >= 4 && colNum < 7) {
            return innerGridCheck(5, this.grid);
          } else {
            return innerGridCheck(6, this.grid);
          }
        } else {
          if (colNum <= 3) {
            return innerGridCheck(7, this.grid);
          } else if (colNum >= 4 && colNum < 7) {
            return innerGridCheck(8, this.grid);
          } else {
            return innerGridCheck(9, this.grid);
          }
        }
      };

      for (let x = 1; x < 10; x++) {
        for (let y = 1; y < 10; y++) {
          if (this.grid[x - 1][y - 1] === 0) {
            for (let guess = 1; guess < 10; guess++) {
              if (validSpot(guess, x, y)) {
                this.grid[x - 1][y - 1] = guess;
                recursiveSolve();
                this.grid[x - 1][y - 1] = 0;
              }
            }
            return;
          } else {
          }
        }
      }
      this.solvedSudoku = this.saveSudoku(this.grid);
    };

    recursiveSolve();
    setSudoku();
  };
}

export default Sudoku;
