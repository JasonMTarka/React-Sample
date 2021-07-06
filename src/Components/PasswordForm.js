import React, { Component } from "react";
import Password from "./Logic/passwordGenLogic";

class PasswordForm extends Component {
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
      },
    };

    let defaultPassword = new Password({});

    this.state = {
      lowercase: defaultPassword.lowercase,
      uppercase: defaultPassword.uppercase,
      nums: defaultPassword.nums,
      syms: defaultPassword.syms,
      minNums: defaultPassword.minNums,
      minSyms: defaultPassword.minSyms,
      passLen: defaultPassword.passLen,
    };
  }

  handleLowercaseChange = (event) => {
    this.setState({
      lowercase: event.target.checked,
    });
  };

  handleUppercaseChange = (event) => {
    this.setState({
      uppercase: event.target.checked,
    });
  };

  handleNumsChange = (event) => {
    this.setState({
      nums: event.target.checked,
    });
  };

  handleSymsChange = (event) => {
    this.setState({
      syms: event.target.checked,
    });
  };

  handleMinNumsChange = (event) => {
    this.setState({
      minNums: event.target.value,
    });
  };

  handleMinSymsChange = (event) => {
    this.setState({
      minSyms: event.target.value,
    });
  };

  handlePassLenChange = (event) => {
    this.setState({
      passLen: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let newPassword = new Password({
      lowercase: this.state.lowercase,
      uppercase: this.state.uppercase,
      nums: this.state.nums,
      syms: this.state.syms,
      minNums: this.state.minNums,
      minSyms: this.state.minSyms,
      passLen: this.state.passLen,
    });
    this.setState({
      password: newPassword.value,
    });
    event.preventDefault();
  };

  render() {
    const maxAllowedPassLen = 16;
    const maxAllowedMinNums = 4;
    const maxAllowedMinSyms = 4;

    const minNumsOptions = maxAllowedMinNums;
    const minNumsItems = [];
    for (let i = 0; i < minNumsOptions + 1; i++) {
      minNumsItems.push(<option key={i}>{i}</option>);
    }
    const minSymsOptions = maxAllowedMinSyms;
    const minSymsItems = [];
    for (let i = 0; i < minSymsOptions + 1; i++) {
      minSymsItems.push(<option key={i}>{i}</option>);
    }
    const passLengthOptions = maxAllowedPassLen;
    const passLengthItems = [];
    for (let i = 0; i < passLengthOptions + 1; i++) {
      passLengthItems.push(<option key={i}>{i}</option>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row mt-3">
          <div className="col form-check">
            <label className="form-check-label">
              {this.props.language === "jp"
                ? this.text.jp.lowercase
                : this.text.eng.lowercase}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="lowercase"
              value="lowercase"
              checked={this.state.lowercase}
              onChange={this.handleLowercaseChange}
            ></input>
          </div>
          <div className="col form-check">
            <label className="form-check-label">
              {this.props.language === "jp"
                ? this.text.jp.uppercase
                : this.text.eng.uppercase}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="uppercase"
              value="uppercase"
              checked={this.state.uppercase}
              onChange={this.handleUppercaseChange}
            ></input>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col form-check">
            <label className="form-check-label">
              {this.props.language === "jp"
                ? this.text.jp.numbers
                : this.text.eng.numbers}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="nums"
              value="nums"
              checked={this.state.nums}
              onChange={this.handleNumsChange}
            ></input>
          </div>
          <div className="col form-check">
            <label className="form-check-label">
              {this.props.language === "jp"
                ? this.text.jp.symbols
                : this.text.eng.symbols}
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="syms"
              value="syms"
              checked={this.state.syms}
              onChange={this.handleSymsChange}
            ></input>
          </div>
        </div>
        <div className="mt-4">
          <div className="row">
            <label>
              {this.props.language === "jp"
                ? this.text.jp.minNums
                : this.text.eng.minNums}
              <select
                value={this.state.minNums}
                className="form-select"
                onChange={this.handleMinNumsChange}
                disabled={this.state.nums === true ? "" : "disabled"}
              >
                {minNumsItems}
              </select>
            </label>
          </div>
          <div className="row">
            <label>
              {this.props.language === "jp"
                ? this.text.jp.minSyms
                : this.text.eng.minSyms}
              <select
                className="form-select"
                value={this.state.minSyms}
                onChange={this.handleMinSymsChange}
                disabled={this.state.syms === true ? "" : "disabled"}
              >
                {minSymsItems}
              </select>
            </label>
          </div>
        </div>
        <div className="mt-3">
          <label>
            {this.props.language === "jp"
              ? this.text.jp.passLen
              : this.text.eng.passLen}
            <select
              className="form-select"
              value={this.state.passLen}
              onChange={this.handlePassLenChange}
            >
              {passLengthItems}
            </select>
          </label>
        </div>
        <div className="mt-5">
          <div>
            <input
              className="form-control"
              type="text"
              placeholder={
                this.state.password
                  ? this.state.password
                  : this.props.language === "jp"
                  ? this.text.jp.waiting
                  : this.text.eng.waiting
              }
              disabled="disabled"
            ></input>
          </div>
          <div className="mt-3">
            <button className="btn btn-primary" type="submit">
              {this.props.language === "jp"
                ? this.text.jp.createPass
                : this.text.eng.createPass}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default PasswordForm;
