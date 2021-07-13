import React from "react";
import Form from "./Form";
import { TEXT } from "../../text";

const { SUDOKU } = TEXT;

export default function Sudoku({language}) {
 
  return (
    <div className="container">
      <h3>{language === TEXT.JP_LANG ? SUDOKU.JP.TITLE : SUDOKU.ENG.TITLE}</h3>
      <p>{language === TEXT.JP_LANG ? SUDOKU.JP.DESC : SUDOKU.ENG.DESC}</p>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
