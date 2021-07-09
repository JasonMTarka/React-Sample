import React from "react";
import Form from "./Form";

export default function Sudoku({language}) {
  const text = {
    eng: {
      title: "Sudoku Solver",
      desc: "Choose a difficulty below and press 'Solve' to begin recursive solving of the sudoku.",
    },

    jp: {
      title: "数独自動解決アプリ",
      desc: "オプションメニューから難易度を選択し、「解決する」ボタンを押して数独の自動解決を見ましょう。",
    },
  };

  return (
    <div className="container">
      <h3>{language === "jp" ? text.jp.title : text.eng.title}</h3>
      <p>{language === "jp" ? text.jp.desc : text.eng.desc}</p>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
