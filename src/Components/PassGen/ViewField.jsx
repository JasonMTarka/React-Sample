import React from "react";
import { TEXT } from "../../text";

const {PASS_GEN} = TEXT;

export default function ViewField({ password, language }) {

  let errMsg = "";

  switch (password.value) {
    case "invalidLen":
      errMsg = language === TEXT.JP_LANG ? PASS_GEN.JP.ERR_LEN : PASS_GEN.ENG.ERR_LEN
      break;
    case "invalidNoOptions":
      errMsg = language === TEXT.JP_LANG ? PASS_GEN.JP.ERR_OPT : PASS_GEN.ENG.ERR_OPT
      break;
    default:
      break;
  }

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={(errMsg ? errMsg 
          : password.value
            ? password.value
            : language === TEXT.JP_LANG
            ? PASS_GEN.JP.WAITING
            : PASS_GEN.ENG.WAITING
        )}
        disabled="disabled"
      ></input>
    </div>
  );
}
