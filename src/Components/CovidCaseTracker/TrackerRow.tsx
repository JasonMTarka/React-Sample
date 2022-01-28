import { LANGUAGES } from "../../Text/defaults";
import { TRACKER_TXT as TEXT } from "../../Text/trackerText";
import { TrackerRowProps } from "../../types/tracker"


export default function TrackerRow({ country, language }: TrackerRowProps) {
  return (
    <tr key={country.Country_text}>
      <td>{country.Country_text}</td>
      <td>
        {country["New Cases_text"]
          ? country["New Cases_text"]
          : language === LANGUAGES.JP
          ? TEXT.JP.MISSING
          : TEXT.ENG.MISSING}
      </td>
      <td>
        {country["New Deaths_text"]
          ? country["New Deaths_text"]
          : language === LANGUAGES.JP
          ? TEXT.JP.MISSING
          : TEXT.ENG.MISSING}
      </td>
      <td>{country["Total Cases_text"]}</td>
      <td>{country["Last Update"]}</td>
    </tr>
  );
}
