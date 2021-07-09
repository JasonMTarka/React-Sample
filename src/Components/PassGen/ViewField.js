import React from "react";

export default function ViewField({ text, state, language }) {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={
          state.password.value
            ? state.password.value
            : language === "jp"
            ? text.jp.waiting
            : text.eng.waiting
        }
        disabled="disabled"
      ></input>
    </div>
  );
}
