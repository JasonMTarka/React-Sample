class Sudoku {
  constructor(grid) {
    this.grid = grid;
    this.originalGrid = [...grid];
  }

  reset = () => {
    this.grid = this.originalGrid;
  };

  saveSudoku = (grid) => {
    let solvedSudoku = JSON.parse(JSON.stringify(grid));
    return solvedSudoku;
  };

  solve = () => {
    const setSudoku = () => {
      this.grid = this.solvedSudoku;
    };

    const recursiveSolve = () => {
      const validSpot = (guess, x, y) => {
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

      const rowCheck = (guess, rowNum) => {
        if (this.grid[rowNum - 1].includes(guess)) {
          return false;
        } else {
          return true;
        }
      };

      const colCheck = (guess, colNum) => {
        let newCol = [];
        for (let row of this.grid) {
          newCol.push(row[colNum - 1]);
        }

        if (newCol.includes(guess)) {
          return false;
        } else {
          return true;
        }
      };

      const gridCheck = (guess, rowNum, colNum) => {
        function innerGridCheck(gridNum, grid) {
          const _gridfinder = {
            1: [0, 3, 0, 3],
            2: [0, 3, 3, 6],
            3: [0, 3, 6, 9],
            4: [3, 6, 0, 3],
            5: [3, 6, 3, 6],
            6: [3, 6, 6, 9],
            7: [6, 9, 0, 3],
            8: [6, 9, 3, 6],
            9: [6, 9, 6, 9],
          };

          let sectionBotAndTop = _gridfinder[gridNum];
          let [sectionBot, sectionTop, bot, top] = sectionBotAndTop;
          let gridArray = [];
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
