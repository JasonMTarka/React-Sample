import React, { Component } from "react";
import Node from "./Node";

class Row extends Component {
  render() {
    let values = [];
    let keyCounter = 0;

    for (let val of this.props.row) {
      values.push(
        <div key={keyCounter} className="col-sm-1">
          <Node val={val} />
        </div>
      );
      keyCounter++;
    }

    return <div className="row mt-2">{values}</div>;
  }
}

export default Row;
