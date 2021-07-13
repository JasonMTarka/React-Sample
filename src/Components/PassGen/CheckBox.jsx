import React from "react";
import { ACTIONS } from "./Form";
import {TEXT} from "../../text";

const {PASS_GEN} = TEXT;

export default function CheckBox({ name, language, password, dispatch }) {

  let assignedType = "";
  let text = "";
  let checked = false;

  switch (name) {
    case PASS_GEN.ENG.LOWERCASE:
      assignedType = ACTIONS.UPDATE_LOWERCASE;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.LOWERCASE : PASS_GEN.ENG.LOWERCASE;
      checked = password.lowercase;
      break
    case PASS_GEN.ENG.UPPERCASE:
      assignedType = ACTIONS.UPDATE_UPPERCASE;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.UPPERCASE : PASS_GEN.ENG.UPPERCASE;
      checked = password.uppercase;
      break
    case PASS_GEN.ENG.NUMBERS:
      assignedType = ACTIONS.UPDATE_NUMS;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.MIN_NUMS : PASS_GEN.ENG.MIN_NUMS;
      checked = password.nums;
      break
    case PASS_GEN.ENG.SYMBOLS:
      assignedType = ACTIONS.UPDATE_SYMS;
      text = language === TEXT.JP_LANG ? PASS_GEN.JP.MIN_SYMS : PASS_GEN.ENG.MIN_SYMS;
      checked = password.syms;
      break
    default:
      throw new Error("Invalid Command");
    }
  
  return (
    <div className="col form-check">
      <label className="form-check-label">{text}</label>
      <input
        type="checkbox"
        className="form-check-input"
        name={name}
        value={name}
        checked={checked}
        onChange={(event) => dispatch({type: assignedType, payload: event})}
      ></input>
    </div>
  );
}
