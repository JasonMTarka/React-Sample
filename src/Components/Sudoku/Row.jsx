import React from "react";
import Node from "./Node";

export default function Row({row}) {

    let values = [];
    let keyCounter = 0;

    for (let val of row) {
      values.push(
        <div key={keyCounter} className="col-sm-1">
          <Node val={val} />
        </div>
      );
      keyCounter++;
    }

    return <div className="row mt-2">{values}</div>;
  }
