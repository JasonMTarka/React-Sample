import { Alert } from "react-bootstrap";

import ViewField from "./ViewField";
import GenerateButton from "./GenerateButton";
import CopyButton from "./CopyButton";
import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { PasswordProps } from "../../types/common";

interface OutputsProps extends PasswordProps {
  copied: boolean
  setCopied: any
}

export default function Outputs({ password, language, copied, setCopied }: OutputsProps) {
  const copyPassword = () => {
    navigator.clipboard.writeText(password.value).then(() => {
      setCopied(true);
    });
  };
  return (
    <div className="mt-5">
      <ViewField password={password} language={language} />
      <div className="row mt-3">
        <GenerateButton language={language}/>
        {password.value ? (
          <CopyButton handler={copyPassword} language={language} />
        ) : null}
      </div>
      {copied ? (
        <Alert className="mt-2" variant="success">
          {language === LANGUAGES.JP ? TEXT.JP.COPY_ALERT : TEXT.ENG.COPY_ALERT}
        </Alert>
      ) : null}
    </div>
  );
}
