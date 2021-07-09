import React, { Component } from "react";
import { Alert } from "react-bootstrap";

import Password from "./passwordGenLogic";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import ViewField from "./ViewField";
import GenerateButton from "./GenerateButton";
import CopyButton from "./CopyButton";

class Form extends Component {
  constructor(props) {
    super(props);

    this.text = {
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

    this.state = {
      password: new Password({}),
      copied: false,
    };
  }

  copyPassword = () => {
    navigator.clipboard.writeText(this.state.password.value).then(() => {
      this.setState({
        copied: true,
      });
    });
  };

  handleLowercaseChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        lowercase: event.target.checked,
      },
    }));
  };

  handleUppercaseChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        uppercase: event.target.checked,
      },
    }));
  };

  handleNumsChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        nums: event.target.checked,
      },
    }));
  };

  handleSymsChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        syms: event.target.checked,
      },
    }));
  };

  handleMinNumsChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        minNums: event.target.value,
      },
    }));
  };

  handleMinSymsChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        minSyms: event.target.value,
      },
    }));
  };

  handlePassLenChange = (event) => {
    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        passLen: event.target.value,
      },
    }));
  };

  handleSubmit = (event) => {

    const {password} = this.state;

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
    this.setState({
      password: newPass,
    });
    this.setState({ copied: false });
    event.preventDefault();
  };

  renderPassLenOptions = (passLengthOptions = 16) => {
    let passLengthItems = [];
    for (let i = 0; i < passLengthOptions + 1; i++) {
      passLengthItems.push(<option key={i}>{i}</option>);
    }
    return passLengthItems;
  };

  renderMaxAllowedMinNumOptions = (maxAllowedMinNums = 4) => {
    let minNumsItems = [];
    for (let i = 0; i < maxAllowedMinNums + 1; i++) {
      minNumsItems.push(<option key={i}>{i}</option>);
    }
    return minNumsItems;
  };

  renderMaxAllowedMinSymOptions = (maxAllowedMinSyms = 4) => {
    let minSymsItems = [];
    for (let i = 0; i < maxAllowedMinSyms + 1; i++) {
      minSymsItems.push(<option key={i}>{i}</option>);
    }
    return minSymsItems;
  };

  render() {

    const {text, state } = this;
    const {language} = this.props;
    const {password} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mt-3 ml-3">
          <div className="col form-check">
            <CheckBox
              name="lowercase"
              text={
                language === "jp"
                  ? text.jp.lowercase
                  : text.eng.lowercase
              }
              state={password.lowercase}
              handler={this.handleLowercaseChange}
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
              state={password.uppercase}
              handler={this.handleUppercaseChange}
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
              state={password.nums}
              handler={this.handleNumsChange}
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
              state={password.syms}
              handler={this.handleSymsChange}
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
            handler={this.handleMinNumsChange}
            disabled={password.nums === true ? "" : "disabled"}
            renderer={this.renderMaxAllowedMinNumOptions}
          />

          <Dropdown
            text={
              language === "jp"
                ? text.jp.minSyms
                : text.eng.minSyms
            }
            value={password.minSyms}
            handler={this.handleMinSymsChange}
            disabled={password.syms === true ? "" : "disabled"}
            renderer={this.renderMaxAllowedMinSymOptions}
          />
        </div>
        <div className="mt-3">
          <Dropdown
            text={
              language === "jp"
                ? text.jp.passLen
                : text.eng.passLen
            }
            value={password.passLen}
            handler={this.handlePassLenChange}
            renderer={this.renderPassLenOptions}
          />
        </div>
        <div className="mt-5">
          <div>
            <ViewField
              text={text}
              state={state}
              language={language}
            />
          </div>
          <div className="row mt-3">
            <GenerateButton language={language} text={text} />

            {password.value ? (
              <CopyButton
                handler={this.copyPassword}
                text={text}
                language={language}
              />
            ) : null}
          </div>
          {state.copied ? (
            <Alert className="mt-2" variant="success">
              Your password has been copied!
            </Alert>
          ) : null}
        </div>
      </form>
    );
  }
}

export default Form;
