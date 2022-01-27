import Form from "./Form";
import { SUDOKU_TXT } from "../../Text/sudokuText";
import { LANGUAGES } from "../../Text/defaults";
import { Props } from "../../types/common";

export default function Sudoku({ language }: Props) {
  return (
    <div className="container">
      <h3>
        {language === LANGUAGES.JP ? SUDOKU_TXT.JP.TITLE : SUDOKU_TXT.ENG.TITLE}
      </h3>
      <p>
        {language === LANGUAGES.JP ? SUDOKU_TXT.JP.DESC : SUDOKU_TXT.ENG.DESC}
      </p>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
