import Home from "./home";
import Sudoku from "./sudoku";
import PasswordGen from "./passwordGen";

function Body(props) {
  return (
    <div className="container">
      <div className="col-9">
        <div>{props.currentPage === "home" ? <Home /> : ""}</div>
        <div>{props.currentPage === "sudoku" ? <Sudoku /> : ""}</div>
        <div>{props.currentPage === "passwordGen" ? <PasswordGen /> : ""}</div>
      </div>
    </div>
  );
}

export default Body;
