import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { LANGUAGES } from "../../Text/defaults";
import { PasswordProps } from "../../types/password";


export default function ViewField({ password, language }: PasswordProps) {
  let errMsg = "";

  switch (password.value) {
    case "invalidLen":
      errMsg = (language === LANGUAGES.JP) ? TEXT.JP.ERR_LEN : TEXT.ENG.ERR_LEN;
      break;
    case "invalidNoOptions":
      errMsg = (language === LANGUAGES.JP) ? TEXT.JP.ERR_OPT : TEXT.ENG.ERR_OPT;
      break;
    default:
      break;
  }

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={
          errMsg
            ? errMsg
            : password.value
            ? password.value
            : language === LANGUAGES.JP
            ? TEXT.JP.WAITING
            : TEXT.ENG.WAITING
        }
        disabled={true}
      ></input>
    </div>
  );
}
