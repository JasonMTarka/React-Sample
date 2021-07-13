import React from "react";
import {TEXT} from "../text"

const {HOME} = TEXT;

export default function Home({language}) {
 
  return (
    <div className="container">
      <h3 key="about">
        {language === TEXT.JP_LANG ? HOME.JP.ABOUT : HOME.ENG.ABOUT}
      </h3>
      <p key="1">{language === TEXT.JP_LANG ? HOME.JP.P1 : HOME.ENG.P1}</p>
      <p key="2">{language === TEXT.JP_LANG ? HOME.JP.P2 : HOME.ENG.P2}</p>
      <p key="3">{language === TEXT.JP_LANG ? HOME.JP.P3 : HOME.ENG.P3}</p>
      <p key="4">{language === TEXT.JP_LANG ? HOME.JP.P4 : HOME.ENG.P4}</p>
    </div>
  );
}