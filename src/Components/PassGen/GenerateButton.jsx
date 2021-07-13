import React from "react";
import { TEXT } from "../../text";

const {PASS_GEN} = TEXT;

export default function GenerateButton({ language }) {
  return (
    <div className="col">
      <button className="btn btn-primary" type="submit">
        {language === TEXT.JP_LANG ? PASS_GEN.JP.CREATE_PASS : PASS_GEN.ENG.CREATE_PASS}
      </button>
    </div>
  );
}
