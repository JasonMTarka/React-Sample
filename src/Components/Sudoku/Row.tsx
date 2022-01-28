import Node from "./Node";
import { RowProps } from "../../types/sudoku";


export default function Row({ row }: RowProps) {
  const values = [];
  let keyCounter = 0;

  for (const val of row) {
    values.push(
      <div key={keyCounter} className="col-sm-1">
        <Node val={val} />
      </div>
    );
    keyCounter++;
  }

  return <div className="row mt-2">{values}</div>;
}
