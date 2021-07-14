import React, { useState, useReducer } from "react";

import Password from "./passwordGenLogic";
import Checkboxes from "./Checkboxes";
import DropdownFields from "./DropdownFields";
import Outputs from "./Outputs";

export const ACTIONS = {
  UPDATE_LOWERCASE: "updateLowercase",
  UPDATE_UPPERCASE: "updateUppercase",
  UPDATE_NUMS: "updateNums",
  UPDATE_SYMS: "updateSyms",
  UPDATE_MIN_NUMS: "updateMinNums",
  UPDATE_MIN_SYMS: "updateMinSyms",
  UPDATE_PASS_LEN: "updatePassLen",
  CREATE_NEW_PASS: "createNewPassword",
};

const reducer = (password, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_LOWERCASE:
      return { ...password, lowercase: action.payload.target.checked };
    case ACTIONS.UPDATE_UPPERCASE:
      return { ...password, uppercase: action.payload.target.checked };
    case ACTIONS.UPDATE_NUMS:
      return { ...password, nums: action.payload.target.checked };
    case ACTIONS.UPDATE_SYMS:
      return { ...password, syms: action.payload.target.checked };
    case ACTIONS.UPDATE_MIN_NUMS:
      return { ...password, minNums: action.payload.target.value };
    case ACTIONS.UPDATE_MIN_SYMS:
      return { ...password, minSyms: action.payload.target.value };
    case ACTIONS.UPDATE_PASS_LEN:
      return { ...password, passLen: action.payload.target.value };
    case ACTIONS.CREATE_NEW_PASS:
      return action.payload;
    default:
      return password;
  }
};

export default function Form({ language }) {
  const [password, dispatch] = useReducer(reducer, new Password({}));
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event) => {
    const newPass = new Password({
      lowercase: password.lowercase,
      uppercase: password.uppercase,
      nums: password.nums,
      syms: password.syms,
      minNums: password.minNums,
      minSyms: password.minSyms,
      passLen: password.passLen,
    });
    newPass.generate();
    dispatch({ type: ACTIONS.CREATE_NEW_PASS, payload: newPass });
    setCopied(false);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Checkboxes password={password} language={language} dispatch={dispatch} />
      <DropdownFields
        password={password}
        language={language}
        dispatch={dispatch}
      />
      <Outputs
        password={password}
        language={language}
        copied={copied}
        setCopied={setCopied}
      />
    </form>
  );
}
