import Home from "./home";
import Sudoku from "./Sudoku/sudokuSolver";
import PasswordGen from "./PassGen/passwordGen";

function Body(props) {
  return (
    <div>
      <div>
        <div>
          {props.currentPage === "home" ? (
            <Home language={props.language} />
          ) : (
            ""
          )}
        </div>
        <div>
          {props.currentPage === "sudoku" ? (
            <Sudoku language={props.language} />
          ) : (
            ""
          )}
        </div>
        <div>
          {props.currentPage === "passwordGen" ? (
            <PasswordGen language={props.language} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
