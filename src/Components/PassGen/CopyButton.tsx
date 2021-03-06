import { LANGUAGES } from "../../Text/defaults";
import { PASS_GEN_TXT as TEXT } from "../../Text/passGenText";
import { Props } from "../../types/common"


interface CopyButtonProps extends Props {
  handler: any
}

export default function CopyButton({ handler, language }: CopyButtonProps) {
  return (
    <div className="col">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handler()}
      >
        {language === LANGUAGES.JP ? TEXT.JP.COPY_PASS : TEXT.ENG.COPY_PASS}
      </button>
    </div>
  );
}
