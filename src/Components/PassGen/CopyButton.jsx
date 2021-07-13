import React from "react";
import { TEXT } from "./Form";

export default function Copy({ handler, language }) {
  return (
    <div className="col">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handler()}
      >
        {language === TEXT.JP_LANG ? TEXT.JP.COPY_PASS : TEXT.ENG.COPY_PASS}
      </button>
    </div>
  );
}
