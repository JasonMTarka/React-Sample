import React from "react";

import { HOME_TXT as TEXT } from "../Text/homeText";
import { LANGUAGES } from "../Text/defaults";

export default function Home({ language }) {
  return (
    <div>
      <h3 key="about">
        {language === LANGUAGES.JP ? TEXT.JP.ABOUT : TEXT.ENG.ABOUT}
      </h3>
      <p key="1">{language === LANGUAGES.JP ? TEXT.JP.P1 : TEXT.ENG.P1}</p>
      <p key="2">{language === LANGUAGES.JP ? TEXT.JP.P2 : TEXT.ENG.P2}</p>
      <p key="3">{language === LANGUAGES.JP ? TEXT.JP.P3 : TEXT.ENG.P3}</p>
      <p key="4">{language === LANGUAGES.JP ? TEXT.JP.P4 : TEXT.ENG.P4}</p>
    </div>
  );
}
