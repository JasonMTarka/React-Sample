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
        waiting: "Waiting...",
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
        waiting: "待機中",
        createPass: "パスワードを作成する",
        copyPass: "パスワードをコーピーする",
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
    const newPass = new Password({
      lowercase: this.state.password.lowercase,
      uppercase: this.state.password.uppercase,
      nums: this.state.password.nums,
      syms: this.state.password.syms,
      minNums: this.state.password.minNums,
      minSyms: this.state.password.minSyms,
      passLen: this.state.password.passLen,
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
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mt-3 ml-3">
          <div className="col form-check">
            <CheckBox
              name="lowercase"
              text={
                this.props.language === "jp"
                  ? this.text.jp.lowercase
                  : this.text.eng.lowercase
              }
              state={this.state.password.lowercase}
              handler={this.handleLowercaseChange}
            />
          </div>
          <div className="col form-check">
            <CheckBox
              name="uppercase"
              text={
                this.props.language === "jp"
                  ? this.text.jp.uppercase
                  : this.text.eng.uppercase
              }
              state={this.state.password.uppercase}
              handler={this.handleUppercaseChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col form-check">
            <CheckBox
              name="nums"
              text={
                this.props.language === "jp"
                  ? this.text.jp.numbers
                  : this.text.eng.numbers
              }
              state={this.state.password.nums}
              handler={this.handleNumsChange}
            />
          </div>
          <div className="col form-check">
            <CheckBox
              name="syms"
              text={
                this.props.language === "jp"
                  ? this.text.jp.symbols
                  : this.text.eng.symbols
              }
              state={this.state.password.syms}
              handler={this.handleSymsChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <Dropdown
            text={
              this.props.language === "jp"
                ? this.text.jp.minNums
                : this.text.eng.minNums
            }
            value={this.state.password.minNums}
            handler={this.handleMinNumsChange}
            disabled={this.state.password.nums === true ? "" : "disabled"}
            renderer={this.renderMaxAllowedMinNumOptions}
          />

          <Dropdown
            text={
              this.props.language === "jp"
                ? this.text.jp.minSyms
                : this.text.eng.minSyms
            }
            value={this.state.password.minSyms}
            handler={this.handleMinSymsChange}
            disabled={this.state.password.syms === true ? "" : "disabled"}
            renderer={this.renderMaxAllowedMinSymOptions}
          />
        </div>
        <div className="mt-3">
          <Dropdown
            text={
              this.props.language === "jp"
                ? this.text.jp.passLen
                : this.text.eng.passLen
            }
            value={this.state.password.passLen}
            handler={this.handlePassLenChange}
            renderer={this.renderPassLenOptions}
          />
        </div>
        <div className="mt-5">
          <div>
            <ViewField
              text={this.text}
              state={this.state}
              language={this.props.language}
            />
          </div>
          <div className="row mt-3">
            <GenerateButton language={this.props.language} text={this.text} />

            {this.state.password.value ? (
              <CopyButton
                handler={this.copyPassword}
                text={this.text}
                language={this.props.language}
              />
            ) : null}
          </div>
          {this.state.copied ? (
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
