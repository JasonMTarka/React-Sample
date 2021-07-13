import React from "react";
import { TEXT, ACTIONS } from "./Form";

export default function CheckBox({ name, language, password, dispatch }) {

  let assignedType = "";
  let text = "";
  let checked = false;

  switch (name) {
    case TEXT.ENG.LOWERCASE:
      assignedType = ACTIONS.UPDATE_LOWERCASE;
      text = language === TEXT.JP_LANG ? TEXT.JP.LOWERCASE : TEXT.ENG.LOWERCASE;
      checked = password.lowercase;
      break
    case TEXT.ENG.UPPERCASE:
      assignedType = ACTIONS.UPDATE_UPPERCASE;
      text = language === TEXT.JP_LANG ? TEXT.JP.UPPERCASE : TEXT.ENG.UPPERCASE;
      checked = password.uppercase;
      break
    case TEXT.ENG.NUMBERS:
      assignedType = ACTIONS.UPDATE_NUMS;
      text = language === TEXT.JP_LANG ? TEXT.JP.MIN_NUMS : TEXT.ENG.MIN_NUMS;
      checked = password.nums;
      break
    case TEXT.ENG.SYMBOLS:
      assignedType = ACTIONS.UPDATE_SYMS;
      text = language === TEXT.JP_LANG ? TEXT.JP.MIN_SYMS : TEXT.ENG.MIN_SYMS;
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
