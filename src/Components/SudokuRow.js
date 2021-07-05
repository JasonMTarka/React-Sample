import React, { Component } from "react";
import SudokuNode from "./SudokuNode";

class SudokuRow extends Component {
  render() {
    let values = [];
    let keyCounter = 0;

    for (let val of this.props.row) {
      values.push(
        <div key={keyCounter} className="col-sm-1">
          <SudokuNode val={val} />
        </div>
      );
      keyCounter++;
    }

    return <div className="row mt-2">{values}</div>;
  }
}

export default SudokuRow;
