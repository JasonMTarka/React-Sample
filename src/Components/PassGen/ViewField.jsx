import React from "react";
import { TEXT } from "./Form";

export default function ViewField({ password, language }) {

  let errMsg = "";

  switch (password.value) {
    case "invalidLen":
      errMsg = language === TEXT.JP_LANG ? "パスワードは短すぎます。長さ又は最小限を上げてください。" : "Invalid length: increase your minimum values or password length."
      break;
    case "invalidNoOptions":
      errMsg = language === TEXT.JP_LANG ? "上記の選択肢を少なくとも１つお選びください。" : "Please choose at least one option."
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
            ? TEXT.JP.WAITING
            : TEXT.ENG.WAITING
        )}
        disabled="disabled"
      ></input>
    </div>
  );
}
