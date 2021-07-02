class Sudoku {
  constructor(difficulty = "Easy #1") {
    this.difficulty = difficulty;
    this.grid = _sudokus[this.difficulty];
  }

  loadNew(difficulty) {
    this.difficulty = difficulty;
    this.grid = _sudokus[this.difficulty];
  }

  reset() {
    this.grid = _sudokus[this.difficulty];
  }

  printSudoku() {
    for (let row of this.grid) {
      console.log(row);
    }
  }

  saveSudoku(grid) {
    let solvedSudoku = JSON.parse(JSON.stringify(grid));
    return solvedSudoku;
  }

  setSudoku() {
    this.grid = this.solvedSudoku;
  }

  solve() {
    this.recursiveSolve();
    this.setSudoku();
  }

  recursiveSolve() {
    for (let x = 1; x < 10; x++) {
      for (let y = 1; y < 10; y++) {
        if (this.grid[x - 1][y - 1] === 0) {
          for (let guess = 1; guess < 10; guess++) {
            if (this._validSpot(guess, x, y)) {
              this.grid[x - 1][y - 1] = guess;
              this.recursiveSolve();
              this.grid[x - 1][y - 1] = 0;
            }
          }
          return;
        } else {
        }
      }
    }
    this.solvedSudoku = this.saveSudoku(this.grid);
  }

  _validSpot(guess, x, y) {
    if (this._rowCheck(guess, x)) {
      if (this._colCheck(guess, y)) {
        if (this._gridCheck(guess, x, y)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
    return false;
  }

  _rowCheck(guess, rowNum) {
    if (this.grid[rowNum - 1].includes(guess)) {
      return false;
    } else {
      return true;
    }
  }

  _colCheck(guess, colNum) {
    let newCol = [];
    for (let row of this.grid) {
      newCol.push(row[colNum - 1]);
    }

    if (newCol.includes(guess)) {
      return false;
    } else {
      return true;
    }
  }

  _gridCheck(guess, rowNum, colNum) {
    function innerGridCheck(gridNum, grid) {
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
  }
}

_gridfinder = {
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

_sudokus = {
  "Easy #1": [
    [1, 0, 0, 9, 0, 4, 0, 8, 2],
    [0, 5, 2, 6, 8, 0, 3, 0, 0],
    [8, 6, 4, 2, 0, 0, 9, 1, 0],
    [0, 1, 0, 0, 4, 9, 8, 0, 6],
    [4, 9, 8, 3, 0, 0, 7, 0, 1],
    [6, 0, 7, 0, 1, 0, 0, 9, 3],
    [0, 8, 6, 0, 3, 5, 2, 0, 9],
    [5, 0, 9, 0, 0, 2, 1, 3, 0],
    [0, 3, 0, 4, 9, 7, 0, 0, 8],
  ],
  "Easy #2": [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
  ],
};
