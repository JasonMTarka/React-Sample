import React from "react";
import { TEXT, ACTIONS } from "./Form"

export default function Dropdown({ name, language, password, dispatch, renderer }) {

  let assignedType = "";
  let text = "";
  let disabled = "";
  let value = "";

  switch(name) {
    case TEXT.ENG.MIN_NUMS:
      assignedType = ACTIONS.UPDATE_MIN_NUMS;
      text = language === TEXT.JP_LANG ? TEXT.JP.MIN_NUMS : TEXT.ENG.MIN_NUMS;
      disabled = password.nums === true ? "" : "disabled";
      value = password.minNums;
      break
    case TEXT.ENG.MIN_SYMS:
      assignedType = ACTIONS.UPDATE_MIN_SYMS;
      text = language === TEXT.JP_LANG ? TEXT.JP.MIN_SYMS : TEXT.ENG.MIN_SYMS;
      disabled = password.syms === true ? "" : "disabled";
      value = password.minSyms;
      break
    case TEXT.ENG.PASS_LEN:
      assignedType = ACTIONS.UPDATE_PASS_LEN;
      text = language === TEXT.JP_LANG ? TEXT.JP.PASS_LEN : TEXT.ENG.PASS_LEN;
      disabled = "";
      value = password.passLen;
      break
    default:
      throw new Error("Invalid Command");
  }

  return (
    <div className="row">
      <label>
        {text}
        <select
          value={value}
          className="form-select"
          onChange={event => dispatch({type: assignedType, payload: event})}
          disabled={disabled}
        >
          {renderer()}
        </select>
      </label>
    </div>
  );
}
