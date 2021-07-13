import React from "react";
import { TEXT } from "./Form";

export default function GenerateButton({ language }) {
  return (
    <div className="col">
      <button className="btn btn-primary" type="submit">
        {language === TEXT.JP_LANG ? TEXT.JP.CREATE_PASS : TEXT.ENG.CREATE_PASS}
      </button>
    </div>
  );
}
