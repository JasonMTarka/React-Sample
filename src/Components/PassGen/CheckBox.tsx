import { ACTIONS } from "./Form";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { LANGUAGES } from "../../Text/defaults";
import { ActionInterface, PasswordProps } from "../../types/common";

interface CheckBoxProps extends PasswordProps {
  name: string
  dispatch: React.Dispatch<ActionInterface>
}

export default function CheckBox({ name, language, password, dispatch }: CheckBoxProps) {
  let assignedType = "";
  let text = "";
  let checked = false;

  switch (name) {
    case TEXT.ENG.LOWERCASE:
      assignedType = ACTIONS.UPDATE_LOWERCASE;
      text = language === LANGUAGES.JP ? TEXT.JP.LOWERCASE : TEXT.ENG.LOWERCASE;
      checked = password.lowercase;
      break;
    case TEXT.ENG.UPPERCASE:
      assignedType = ACTIONS.UPDATE_UPPERCASE;
      text = language === LANGUAGES.JP ? TEXT.JP.UPPERCASE : TEXT.ENG.UPPERCASE;
      checked = password.uppercase;
      break;
    case TEXT.ENG.NUMBERS:
      assignedType = ACTIONS.UPDATE_NUMS;
      text = language === LANGUAGES.JP ? TEXT.JP.MIN_NUMS : TEXT.ENG.MIN_NUMS;
      checked = password.nums;
      break;
    case TEXT.ENG.SYMBOLS:
      assignedType = ACTIONS.UPDATE_SYMS;
      text = language === LANGUAGES.JP ? TEXT.JP.MIN_SYMS : TEXT.ENG.MIN_SYMS;
      checked = password.syms;
      break;
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
        onChange={(event) => dispatch({ type: assignedType, payload: event })}
      ></input>
    </div>
  );
}
