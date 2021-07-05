import SudokuForm from "./SudokuForm";

function Sudoku(props) {
  const text = {
    eng: {
      title: "Sudoku Solver",
      desc: "A sudoku solver here using JSON-server, a mock RESTful API.",
    },

    jp: {
      title: "数独自動解決アプリ",
      desc: "模擬RESTfulのAPIであるJSON-serverを利用する、数独を自動的に解決するアプリ。",
    },
  };

  return (
    <div className="container">
      <h3>{props.language === "jp" ? text.jp.title : text.eng.title}</h3>
      <p>{props.language === "jp" ? text.jp.desc : text.eng.desc}</p>
      <div>
        <SudokuForm language={props.language} />
      </div>
    </div>
  );
}

export default Sudoku;
