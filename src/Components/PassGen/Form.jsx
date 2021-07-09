import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import Password from "./passwordGenLogic";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import ViewField from "./ViewField";
import GenerateButton from "./GenerateButton";
import CopyButton from "./CopyButton";

export default function Form ({language}) {

  const text = {
    eng: {
      lowercase: "Lowercase",
      uppercase: "Uppercase",
      numbers: "Numbers",
      symbols: "Symbols",
      minNums: "Minimum Amount of Numbers",
      minSyms: "Minimum Amount of Symbols",
      passLen: "Password Length",
      waiting: "",
      createPass: "Create Password",
      copyPass: "Copy Password",
    },
    jp: {
      lowercase: "小文字",
      uppercase: "大文字",
      numbers: "数字",
      symbols: "記号",
      minNums: "数字の最小限",
      minSyms: "記号の最小限",
      passLen: "パスワードの長さ",
      waiting: "",
      createPass: "パスワードを作成する",
      copyPass: "パスワードをコピーする",
    },
  };

  const [password, setPassword] = useState(new Password({}));
  const [copied, setCopied] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(password.value).then(() => {
      setCopied(true);
    })
  }
  
  const handleLowercaseChange = event => {
    setPassword(prevState => ({
        ...prevState,
        lowercase: event.target.checked,
    }));
  }

  const handleUppercaseChange = event => {
    setPassword(prevState => ({
        ...prevState,
        uppercase: event.target.checked,
    }));
  }

  const handleNumsChange = event => {
    setPassword(prevState => ({
        ...prevState,
        nums: event.target.checked,
    }));
  }

  const handleSymsChange = event => {
    setPassword(prevState => ({
        ...prevState,
        syms: event.target.checked,
    }));
  }

  const handleMinNumsChange = event => {
    setPassword(prevState => ({
        ...prevState,
        minNums: event.target.value,
    }));
  }

  const handleMinSymsChange = event => {
    setPassword(prevState => ({
        ...prevState,
        minSyms: event.target.value,
    }));
  }

  const handlePassLenChange = event => {
    setPassword(prevState => ({
        ...prevState,
        passLen: event.target.value,
    }));
  }

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
    setPassword(newPass);
    setCopied(false);
    event.preventDefault();
  }

  const renderPassLenOptions = (passLengthOptions = 16) => {
    let passLengthItems = [];
    for (let i = 0; i < passLengthOptions + 1; i++) {
      passLengthItems.push(<option key={i}>{i}</option>);
    }
    return passLengthItems;
  }

  const renderMaxAllowedMinNumOptions = (maxAllowedMinNums = 4) => {
    let minNumsItems = [];
    for (let i = 0; i < maxAllowedMinNums + 1; i++) {
      minNumsItems.push(<option key={i}>{i}</option>);
    }
    return minNumsItems;
  }

  const renderMaxAllowedMinSymOptions = (maxAllowedMinSyms = 4) => {
    let minSymsItems = [];
    for (let i = 0; i < maxAllowedMinSyms + 1; i++) {
      minSymsItems.push(<option key={i}>{i}</option>);
    }
    return minSymsItems;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-3 ml-3">
        <div className="col form-check">
          <CheckBox
            name="lowercase"
            text={
              language === "jp"
                ? text.jp.lowercase
                : text.eng.lowercase
            }
            checked={password.lowercase}
            handler={handleLowercaseChange}
          />
        </div>
        <div className="col form-check">
          <CheckBox
            name="uppercase"
            text={
              language === "jp"
                ? text.jp.uppercase
                : text.eng.uppercase
            }
            checked={password.uppercase}
            handler={handleUppercaseChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col form-check">
          <CheckBox
            name="nums"
            text={
              language === "jp"
                ? text.jp.numbers
                : text.eng.numbers
            }
            checked={password.nums}
            handler={handleNumsChange}
          />
        </div>
        <div className="col form-check">
          <CheckBox
            name="syms"
            text={
              language === "jp"
                ? text.jp.symbols
                : text.eng.symbols
            }
            checked={password.syms}
            handler={handleSymsChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <Dropdown
          text={
            language === "jp"
              ? text.jp.minNums
              : text.eng.minNums
          }
          value={password.minNums}
          handler={handleMinNumsChange}
          disabled={password.nums === true ? "" : "disabled"}
          renderer={renderMaxAllowedMinNumOptions}
          
        />

        <Dropdown
          text={
            language === "jp"
              ? text.jp.minSyms
              : text.eng.minSyms
          }
          value={password.minSyms}
          handler={handleMinSymsChange}
          disabled={password.syms === true ? "" : "disabled"}
          renderer={renderMaxAllowedMinSymOptions}
        />
      </div>
      <div className="mt-3">
        <Dropdown
          text={
            language === "jp"
              ? text.jp.passLen
              : text.eng.passLen
          }
          handler={handlePassLenChange}
          value={password.passLen}
          renderer={renderPassLenOptions}
        />
      </div>
      <div className="mt-5">
        <div>
          <ViewField
            text={text}
            password={password}
            language={language}
          />
        </div>
        <div className="row mt-3">
          <GenerateButton language={language} text={text} />

          {password.value ? (
            <CopyButton
              handler={copyPassword}
              text={text}
              language={language}
            />
          ) : null}
        </div>
        {copied ? (
          <Alert className="mt-2" variant="success">
            Your password has been copied!
          </Alert>
        ) : null}
      </div>
    </form>
  );
}

