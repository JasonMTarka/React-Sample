import { useState } from "react";
import Checkbox from "./Checkbox";
import Password from "./passwordGenLogic";

function PasswordGen(props) {
  let defaultPassword = new Password({});

  const defaultCheckbox = {
    Lowercase: defaultPassword.lowercase,
    Uppercase: defaultPassword.uppercase,
    Numbers: defaultPassword.nums,
    Symbols: defaultPassword.syms,
  };

  const [checkedState, setCheckedState] = useState(
    Object.values(defaultCheckbox)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="container">
      <h3>Password Generator</h3>
      <p>Here I will implement a fully functional password generator.</p>
      {Object.keys(defaultCheckbox).map((checkboxName, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={checkboxName}
              value={checkboxName}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{checkboxName}</label>
          </div>
        );
      })}
    </div>
  );
}

export default PasswordGen;
