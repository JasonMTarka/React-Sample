import React from "react";
import Table from "react-bootstrap/Table";

import { LANGUAGES } from "../../Text/defaults";
import { TRACKER_TXT as TEXT } from "../../Text/trackerText";
import TrackerRow from "./TrackerRow";

export default function TrackerTable({ data, language }) {
  const renderData = () => {
    return data.map((country) => (
      <TrackerRow
        key={country.Country_text}
        country={country}
        language={language}
      ></TrackerRow>
    ));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">
            {language === LANGUAGES.JP ? TEXT.JP.NAME : TEXT.ENG.NAME}
          </th>
          <th scope="col">
            {language === LANGUAGES.JP ? TEXT.JP.NEW_CASES : TEXT.ENG.NEW_CASES}
          </th>
          <th scope="col">
            {language === LANGUAGES.JP
              ? TEXT.JP.NEW_DEATHS
              : TEXT.ENG.NEW_DEATHS}
          </th>
          <th scope="col">
            {language === LANGUAGES.JP ? TEXT.JP.TOTAL : TEXT.ENG.TOTAL}
          </th>
          <th scope="col">
            {language === LANGUAGES.JP ? TEXT.JP.UPDATED : TEXT.ENG.UPDATED}
          </th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </Table>
  );
}
