import Form from "./Form";
import {TEXT} from "../../text"

const {PASS_GEN} = TEXT

export default function PasswordGen({language}) {
 
  return (
    <div>
      <div>
        <h3>{language === TEXT.JP_LANG ? PASS_GEN.JP.TITLE : PASS_GEN.ENG.TITLE}</h3>
        <p>{language === TEXT.JP_LANG ? PASS_GEN.JP.DESC : PASS_GEN.ENG.DESC}</p>
      </div>
      <div>
        <Form language={language} />
      </div>
    </div>
  );
}
