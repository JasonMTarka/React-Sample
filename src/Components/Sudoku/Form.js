import React, { Component } from "react";
import Sudoku from "./sudokuSolverLogic";
import Row from "./Row";

class Form extends Component {
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
      difficulties: {}, // Currently redundant while not using RESTful API
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    // Temporarily disabled fetch request while finding a solution for creating a production-level RESTful API
    //
    // let fetchRequest = fetch("http://localhost:3000/difficulties");
    // let fetchResponse = fetchRequest.then((response) => response.json());
    // fetchResponse.then((data) => {
    //   if (this._isMounted) {
    //     this.setState({ difficulties: data });
    //   }
    // });
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

  renderGrid = () => {
    let fieldRows = [];
    let keyCounter = 0;
    for (let row of this.state.sudoku.grid) {
      fieldRows.push(
        <div key={keyCounter}>
          <Row row={row} />
        </div>
      );
      keyCounter++;
    }
    return fieldRows;
  };

  renderDifficultyOptions = () => {
    let difficultyOptions = [];
    for (let option of Object.keys(this.state.sudoku._sudokus)) {
      // When reimplementing RESTful API, change to Object.keys(this.state.difficulties)
      difficultyOptions.push(<option key={option}>{option}</option>);
    }
    return difficultyOptions;
  };

  render() {
    return (
      <div>
        <div>{this.renderGrid()}</div>
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
            {this.renderDifficultyOptions()}
          </select>
        </div>
      </div>
    );
  }
}

export default Form;
