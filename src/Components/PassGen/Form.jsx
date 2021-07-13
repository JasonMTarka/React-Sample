import React, { useState, useReducer } from "react";
import { Alert } from "react-bootstrap";

import Password from "./passwordGenLogic";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import ViewField from "./ViewField";
import GenerateButton from "./GenerateButton";
import CopyButton from "./CopyButton";
import { LANGUAGES } from "../../Text/languages";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";


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
      return {...password, lowercase: action.payload.target.checked}
    case ACTIONS.UPDATE_UPPERCASE:
      return {...password, uppercase: action.payload.target.checked}
    case ACTIONS.UPDATE_NUMS:
      return {...password, nums: action.payload.target.checked}
    case ACTIONS.UPDATE_SYMS:
      return {...password, syms: action.payload.target.checked}
    case ACTIONS.UPDATE_MIN_NUMS:
      return {...password, minNums: action.payload.target.value}
    case ACTIONS.UPDATE_MIN_SYMS:
      return {...password, minSyms: action.payload.target.value}
    case ACTIONS.UPDATE_PASS_LEN:
      return {...password, passLen: action.payload.target.value}
    case ACTIONS.CREATE_NEW_PASS:
      return action.payload
    default:
      return password
  }
}

export default function Form ({language}) {

  const [password, dispatch] = useReducer(reducer, new Password({}));
  const [copied, setCopied] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(password.value).then(() => {
      setCopied(true);
    })
  };

  const handleSubmit = event => {
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
    dispatch({type: ACTIONS.CREATE_NEW_PASS, payload: newPass});
    setCopied(false);
    event.preventDefault();
  };

  const renderPassLenOptions = (passLengthOptions = 16) => {
    let passLengthItems = [];
    for (let i = 0; i < passLengthOptions + 1; i++) {
      passLengthItems.push(<option key={i}>{i}</option>);
    }
    return passLengthItems;
  };

  const renderMaxAllowedMinNumOptions = (maxAllowedMinNums = 4) => {
    let minNumsItems = [];
    for (let i = 0; i < maxAllowedMinNums + 1; i++) {
      minNumsItems.push(<option key={i}>{i}</option>);
    }
    return minNumsItems;
  };

  const renderMaxAllowedMinSymOptions = (maxAllowedMinSyms = 4) => {
    let minSymsItems = [];
    for (let i = 0; i < maxAllowedMinSyms + 1; i++) {
      minSymsItems.push(<option key={i}>{i}</option>);
    }
    return minSymsItems;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-3 ml-3">
        {[TEXT.ENG.LOWERCASE, TEXT.ENG.UPPERCASE].map(checkboxName => (
          <div key={checkboxName} className="col form-check">
          <CheckBox
            name={checkboxName}
            language={language}
            password={password}
            dispatch={dispatch}
          />
        </div>
        ))}
      </div>
      <div className="row mt-3">
        {[TEXT.ENG.NUMBERS, TEXT.ENG.SYMBOLS].map(checkboxName => (
          <div key={checkboxName} className="col form-check">
          <CheckBox
            name={checkboxName}
            language={language}
            password={password}
            dispatch={dispatch}
          />
        </div>
        ))}
      </div>
      <div className="mt-4">
        <Dropdown
          name={TEXT.ENG.MIN_NUMS}
          language={language}
          password={password}
          renderer={renderMaxAllowedMinNumOptions}
          dispatch={dispatch}
        />
         <Dropdown
          name={TEXT.ENG.MIN_SYMS}
          language={language}
          password={password}
          renderer={renderMaxAllowedMinSymOptions}
          dispatch={dispatch}
        />
      </div>
      <div className="mt-3">
      <Dropdown
          name={TEXT.ENG.PASS_LEN}
          language={language}
          password={password}
          renderer={renderPassLenOptions}
          dispatch={dispatch}
        />
      </div>
      <div className="mt-5">
        <div>
          <ViewField
            password={password}
            language={language}
          />
        </div>
        <div className="row mt-3">
          
          <GenerateButton language={language} type="submit"/>
          {password.value ? (
            <CopyButton
              handler={copyPassword}
              language={language}
            />
          ) : null}
        </div>
        {copied ? (
          <Alert className="mt-2" variant="success">
            {language === LANGUAGES.JP ? TEXT.JP.COPY_ALERT : TEXT.ENG.COPY_ALERT}
          </Alert>
        ) : null}
      </div>
    </form>
  );
}

