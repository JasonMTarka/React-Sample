import Form from "./Form";
import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { Props } from "../../types/common";


export default function PasswordGen({ language }: Props) {
  return (
    <div>
      <div>
        <h3>{language === LANGUAGES.JP ? TEXT.JP.TITLE : TEXT.ENG.TITLE}</h3>
        <p>{language === LANGUAGES.JP ? TEXT.JP.DESC : TEXT.ENG.DESC}</p>
      </div>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
