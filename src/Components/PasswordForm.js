import React, { Component } from "react";
import Password from "./passwordGenLogic";

class PasswordForm extends Component {
  constructor(props) {
    super(props);
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
    console.log(newPassword.value);
    event.preventDefault();
  };

  render() {
    const minNumsOptions = 4;
    const minNumsItems = [];
    for (let i = 0; i < minNumsOptions + 1; i++) {
      minNumsItems.push(<option key={i}>{i}</option>);
    }
    const minSymsOptions = 4;
    const minSymsItems = [];
    for (let i = 0; i < minSymsOptions + 1; i++) {
      minSymsItems.push(<option key={i}>{i}</option>);
    }
    const passLengthOptions = 16;
    const passLengthItems = [];
    for (let i = 0; i < passLengthOptions + 1; i++) {
      passLengthItems.push(<option key={i}>{i}</option>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-check mt-4">
          <label className="form-check-label">Lowercase</label>
          <input
            type="checkbox"
            className="form-check-input"
            name="lowercase"
            value="lowercase"
            checked={this.state.lowercase}
            onChange={this.handleLowercaseChange}
          ></input>
        </div>
        <div className="form-check">
          <label className="form-check-label">Uppercase</label>
          <input
            type="checkbox"
            className="form-check-input"
            name="uppercase"
            value="uppercase"
            checked={this.state.uppercase}
            onChange={this.handleUppercaseChange}
          ></input>
        </div>
        <div className="form-check">
          <label className="form-check-label">Numbers</label>
          <input
            type="checkbox"
            className="form-check-input"
            name="nums"
            value="nums"
            checked={this.state.nums}
            onChange={this.handleNumsChange}
          ></input>
        </div>
        <div className="form-check">
          <label className="form-check-label">Symbols</label>
          <input
            type="checkbox"
            className="form-check-input"
            name="syms"
            value="syms"
            checked={this.state.syms}
            onChange={this.handleSymsChange}
          ></input>
        </div>
        <div className="mt-4">
          <div className="row">
            <label>
              Minimum Amount of Numbers
              <select
                value={this.state.minNums}
                className="form-select"
                onChange={this.handleMinNumsChange}
              >
                {minNumsItems}
              </select>
            </label>
          </div>
          <div className="row">
            <label>
              Minimum Amount of Symbols
              <select
                className="form-select"
                value={this.state.minSyms}
                onChange={this.handleMinSymsChange}
              >
                {minSymsItems}
              </select>
            </label>
          </div>
        </div>
        <div>
          <label>
            Password length
            <select
              className="form-select"
              value={this.state.passLen}
              onChange={this.handlePassLenChange}
            >
              {passLengthItems}
            </select>
          </label>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default PasswordForm;

// {
//   Object.keys(defaultCheckbox).map((checkboxName, index) => {
//     return (
//       <div key={index}>
//         <input
//           type="checkbox"
//           id={`custom-checkbox-${index}`}
//           name={checkboxName}
//           value={checkboxName}
//           checked={checkedState[index]}
//           onChange={() => handleOnChange(index)}
//         />
//         <label htmlFor={`custom-checkbox-${index}`}>{checkboxName}</label>
//       </div>
//     );
//   });
// }
