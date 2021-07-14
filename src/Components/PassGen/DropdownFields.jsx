import React from "react";

import Dropdown from "./Dropdown";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";

export default function DropdownFields({ language, password, dispatch }) {
  const renderOptions = (options) => {
    let items = [];
    for (let i = 0; i < options + 1; i++) {
      items.push(<option key={i}>{i}</option>);
    }
    return items;
  };

  return (
    <>
      <div className="mt-4">
        {[TEXT.ENG.MIN_NUMS, TEXT.ENG.MIN_SYMS].map((menu) => (
          <Dropdown
            key={menu}
            name={menu}
            language={language}
            password={password}
            renderer={renderOptions}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div className="mt-3">
        <Dropdown
          name={TEXT.ENG.PASS_LEN}
          language={language}
          password={password}
          renderer={renderOptions}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
