import React from "react";
import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";

export default function Copy({ handler, language }) {
  return (
    <div className="col">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handler()}
      >
        {language === LANGUAGES.JP ? TEXT.JP.COPY_PASS : TEXT.ENG.COPY_PASS}
      </button>
    </div>
  );
}
