import React from "react";
import {TEXT} from "../text"

const {HOME} = TEXT;

export default function Home({language}) {
 
  return (
    <div className="container">
      <h3 key="about">
        {language === TEXT.JP_LANG ? HOME.JP.ABOUT : HOME.eng.ABOUT}
      </h3>
      <p key="1">{language === TEXT.JP_LANG ? HOME.JP.P1 : HOME.eng.P1}</p>
      <p key="2">{language === TEXT.JP_LANG ? HOME.JP.P2 : HOME.eng.P2}</p>
      <p key="3">{language === TEXT.JP_LANG ? HOME.JP.P3 : HOME.eng.P3}</p>
      <p key="4">{language === TEXT.JP_LANG ? HOME.JP.P4 : HOME.eng.P4}</p>
    </div>
  );
}