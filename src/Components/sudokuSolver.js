import SudokuForm from "./SudokuForm";

function Sudoku(props) {
  return (
    <div className="container">
      <h3>Sudoku Solver</h3>
      <p>
        I will implement a sudoku solver here using JSON-server, a mock RESTful
        API.
      </p>
      <div>
        <SudokuForm />
      </div>
    </div>
  );
}

export default Sudoku;
