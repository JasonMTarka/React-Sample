import React from "react";

export default function GenerateButton({ language, text }) {
  return (
    <div className="col">
      <button className="btn btn-primary" type="submit">
        {language === "jp" ? text.jp.createPass : text.eng.createPass}
      </button>
    </div>
  );
}
