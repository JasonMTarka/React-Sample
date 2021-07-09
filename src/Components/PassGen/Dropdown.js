import React from "react";

export default function Dropdown({ value, text, disabled, handler, renderer }) {
  return (
    <div className="row">
      <label>
        {text}
        <select
          value={value}
          className="form-select"
          onChange={handler}
          disabled={disabled}
        >
          {renderer()}
        </select>
      </label>
    </div>
  );
}
