import Form from "./Form";

import { LANGUAGES } from "../../Text/languages";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";


export default function PasswordGen({language}) {
 
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
