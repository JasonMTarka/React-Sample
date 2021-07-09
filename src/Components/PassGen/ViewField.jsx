import React from "react";

export default function ViewField({ text, password, language }) {

  let errMsg = "";

  if (password.value === "invalidLen") {
    if (language === "jp") { errMsg = "パスワードは短すぎます。長さ又は最小限を上げてください。"
    } else {
    errMsg = "Invalid length: increase your minimum values or password length."}
  }

  if (password.value === "invalidNoOptions") {
    if (language === "jp") { errMsg = "上記の選択肢を少なくとも１つお選びください。"
    } else {
    errMsg = "Please choose at least one option."}
  }

  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder={(errMsg ? errMsg 
          : password.value
            ? password.value
            : language === "jp"
            ? text.jp.waiting
            : text.eng.waiting
        )}
        disabled="disabled"
      ></input>
    </div>
  );
}
