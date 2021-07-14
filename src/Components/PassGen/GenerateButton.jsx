import React from "react";

import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";

export default function GenerateButton({ language }) {
  return (
    <div className="col">
      <button className="btn btn-primary" type="submit">
        {language === LANGUAGES.JP ? TEXT.JP.CREATE_PASS : TEXT.ENG.CREATE_PASS}
      </button>
    </div>
  );
}
