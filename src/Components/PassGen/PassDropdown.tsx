import { ACTIONS } from "./Form";
import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { PassDropdownProps } from "../../types/password";


export default function PassDropdown({
  name,
  language,
  password,
  dispatch,
  renderer,
}: PassDropdownProps) {
  const numOfMinNumOptions = 4;
  const numOfMinSymOptions = 4;
  const numOfPassLenOptions = 16;

  let assignedType = "";
  let text = "";
  let disabled: boolean;
  let value = 0;
  let minOptions = 0;

  switch (name) {
    case TEXT.ENG.MIN_NUMS:
      assignedType = ACTIONS.UPDATE_MIN_NUMS;
      text = language === LANGUAGES.JP ? TEXT.JP.MIN_NUMS : TEXT.ENG.MIN_NUMS;
      disabled = !password.nums === true;
      value = password.minNums;
      minOptions = numOfMinNumOptions;
      break;

    case TEXT.ENG.MIN_SYMS:
      assignedType = ACTIONS.UPDATE_MIN_SYMS;
      text = language === LANGUAGES.JP ? TEXT.JP.MIN_SYMS : TEXT.ENG.MIN_SYMS;
      disabled = !password.syms === true;
      value = password.minSyms;
      minOptions = numOfMinSymOptions;
      break;

    case TEXT.ENG.PASS_LEN:
      assignedType = ACTIONS.UPDATE_PASS_LEN;
      text = language === LANGUAGES.JP ? TEXT.JP.PASS_LEN : TEXT.ENG.PASS_LEN;
      disabled = false;
      value = password.passLen;
      minOptions = numOfPassLenOptions;
      break;

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
          onChange={(event) => dispatch({ type: assignedType, payload: event })}
          disabled={disabled}
        >
          {renderer(minOptions)}
        </select>
      </label>
    </div>
  );
}
