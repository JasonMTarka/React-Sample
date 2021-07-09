import React from "react";

export default function CheckBox({ name, text, checked, handler }) {
  return (
    <div className="col form-check">
      <label className="form-check-label">{text}</label>
      <input
        type="checkbox"
        className="form-check-input"
        name={name}
        value={name}
        checked={checked}
        onChange={handler}
      ></input>
    </div>
  );
}
