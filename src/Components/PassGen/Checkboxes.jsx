import React from "react";

import CheckBox from "./CheckBox";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";

export default function Checkboxes({ language, password, dispatch }) {
  return (
    <>
      <div className="row mt-3 ml-3">
        {[TEXT.ENG.LOWERCASE, TEXT.ENG.UPPERCASE].map((checkboxName) => (
          <div key={checkboxName} className="col form-check">
            <CheckBox
              name={checkboxName}
              language={language}
              password={password}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>
      <div className="row mt-3">
        {[TEXT.ENG.NUMBERS, TEXT.ENG.SYMBOLS].map((checkboxName) => (
          <div key={checkboxName} className="col form-check">
            <CheckBox
              name={checkboxName}
              language={language}
              password={password}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>
    </>
  );
}
