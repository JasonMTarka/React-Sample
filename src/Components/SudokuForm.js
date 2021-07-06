import React, { Component } from "react";
import Sudoku from "./Logic/sudokuSolverLogic";
import SudokuRow from "./SudokuRow";

class SudokuForm extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.text = {
      eng: {
        solve: "Solve",
        reset: "Reset",
      },
      jp: {
        solve: "解決する",
        reset: "リセット",
      },
    };

    this.state = {
      sudoku: new Sudoku(),
      difficulties: {},
    };
  }

  componentDidMount = () => {
    this._isMounted = true;

    let fetchRequest = fetch(
      "sample-react-site-jasontarka.netlify.app/lambda_functions/hello-world/hello-world"
    );
    let fetchResponse = fetchRequest.then((response) => response.json());
    console.log(fetchResponse);
    fetchResponse.then((data) => {
      if (this._isMounted) {
        this.setState({ difficulties: data });
      }
    });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  setNewDifficulty = (difficulty) => {
    this.setState({ sudoku: new Sudoku(difficulty) });
  };

  resetSudoku = () => {
    this.setState({
      sudoku: new Sudoku(this.state.sudoku.difficulty),
    });
  };

  solveSudoku = () => {
    let newSudoku = new Sudoku(this.state.sudoku.difficulty);
    newSudoku.solve();

    this.setState({
      sudoku: newSudoku,
    });
  };

  handleDifficultyChange = (event) => {
    this.setNewDifficulty(event.target.value);
  };

  handleSolve = () => {
    this.solveSudoku(this.state.sudoku.difficulty);
  };

  render() {
    let fieldRows = [];
    let keyCounter = 0;
    for (let row of this.state.sudoku.grid) {
      fieldRows.push(
        <div key={keyCounter}>
          <SudokuRow row={row} />
        </div>
      );
      keyCounter++;
    }

    let difficultyOptions = [];
    for (let option of Object.keys(this.state.difficulties)) {
      difficultyOptions.push(<option key={keyCounter}>{option}</option>);
      keyCounter++;
    }

    return (
      <div>
        <div>{fieldRows}</div>
        <div className="btn-toolbar mt-3">
          <button className="col btn btn-primary" onClick={this.handleSolve}>
            {this.props.language === "jp"
              ? this.text.jp.solve
              : this.text.eng.solve}
          </button>
          <button
            className="col ml-2 btn btn-secondary"
            onClick={this.resetSudoku}
          >
            {this.props.language === "jp"
              ? this.text.jp.reset
              : this.text.eng.reset}
          </button>
        </div>
        <div className="mt-3">
          <select
            className="col form-select"
            value={this.state.sudoku.difficulty}
            onChange={this.handleDifficultyChange}
          >
            {difficultyOptions}
          </select>
        </div>
      </div>
    );
  }
}

export default SudokuForm;
