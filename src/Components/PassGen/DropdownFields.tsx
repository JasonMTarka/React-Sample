import PassDropdown from "./PassDropdown";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { DropdownFieldsProps } from "../../types/password";


export default function DropdownFields({ language, password, dispatch }: DropdownFieldsProps) {
  const renderOptions = (options: number) => {
    const items = [];
    for (let i = 0; i < options + 1; i++) {
      items.push(<option key={i}>{i}</option>);
    }
    return items;
  };

  return (
    <>
      <div className="mt-4">
        {[TEXT.ENG.MIN_NUMS, TEXT.ENG.MIN_SYMS].map((menu) => (
          <PassDropdown
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
        <PassDropdown
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
