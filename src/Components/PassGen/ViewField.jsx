import React from "react";

export default function ViewField({ text, password, language }) {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={
          password.value
            ? password.value
            : language === "jp"
            ? text.jp.waiting
            : text.eng.waiting
        }
        disabled="disabled"
      ></input>
    </div>
  );
}
