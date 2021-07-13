import React from "react";
import { TEXT } from "../../text";

const {PASS_GEN} = TEXT;

export default function Copy({ handler, language }) {
  return (
    <div className="col">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handler()}
      >
        {language === TEXT.JP_LANG ? PASS_GEN.JP.COPY_PASS : PASS_GEN.ENG.COPY_PASS}
      </button>
    </div>
  );
}
