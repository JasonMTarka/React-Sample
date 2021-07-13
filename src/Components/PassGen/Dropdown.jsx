import React from "react";
import { ACTIONS } from "./Form"
import { TEXT } from "../../text";

const {PASS_GEN} = TEXT;

export default function Dropdown({ name, language, password, dispatch, renderer }) {

  let assignedType = "";
  let text = "";
  let disabled = "";
  let value = "";

  switch(name) {
    case PASS_GEN.ENG.MIN_NUMS:
      assignedType = ACTIONS.UPDATE_MIN_NUMS;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.MIN_NUMS : PASS_GEN.ENG.MIN_NUMS;
      disabled = password.nums === true ? "" : "disabled";
      value = password.minNums;
      break
    case PASS_GEN.ENG.MIN_SYMS:
      assignedType = ACTIONS.UPDATE_MIN_SYMS;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.MIN_SYMS : PASS_GEN.ENG.MIN_SYMS;
      disabled = password.syms === true ? "" : "disabled";
      value = password.minSyms;
      break
    case PASS_GEN.ENG.PASS_LEN:
      assignedType = ACTIONS.UPDATE_PASS_LEN;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.PASS_LEN : PASS_GEN.ENG.PASS_LEN;
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
