import React, { Component } from "react";

class SudokuNode extends Component {
  render() {
    return (
      <div
        className="form-control form-control-sm"
        type="text"
        placeholder={this.props.val}
        disabled="disabled"
      >
        {this.props.val}
      </div>
    );
  }
}

export default SudokuNode;
