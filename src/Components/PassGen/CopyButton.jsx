import React from "react";

export default function Copy({ handler, language, text }) {
  return (
    <div className="col">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handler()}
      >
        {language === "jp" ? text.jp.copyPass : text.eng.copyPass}
      </button>
    </div>
  );
}
