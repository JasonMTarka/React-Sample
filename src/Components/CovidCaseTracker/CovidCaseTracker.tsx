import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import TrackerTable from "./TrackerTable";
import TrackerForm from "./TrackerForm";
import { CovidTrackerApiResponse } from "../../types/tracker";
import { Props } from "../../types/common";


export default function CovidCaseTracker({ language }: Props) {
  const [data, setData] = useState<CovidTrackerApiResponse[]>([]);
  const [input, setInput] = useState("");
  const allData: React.MutableRefObject<CovidTrackerApiResponse[]> = useRef([]);
  const searchedCountries: React.MutableRefObject<string[]> = useRef([]);

  useEffect(() => {
    const URL = "https://covid-19.dataflowkit.com/v1";
    let isMounted = true;

    axios
      .get(URL)
      .then((response) => {
        allData.current = response.data;
      })
      .then(() => {
        const newData: CovidTrackerApiResponse[] = [];
        const defaults = ["USA", "Japan", "UK"];
        for (let country of defaults) {
          const countryData = getData(country);
          if (countryData) {
            newData.push(countryData);
            searchedCountries.current.push(countryData.Country_text);
          }
        }
        if (isMounted) {
          setData(newData);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const updateData = (countryData: CovidTrackerApiResponse) => {
    const newData = [...data];
    newData.push(countryData);
    searchedCountries.current.push(countryData.Country_text);
    setData(newData);
  };

  const getData = (countryName: string) => {
    for (let country of allData.current) {
      if (country.Country_text === countryName) {
        return country;
      }
    }
  };

  const handleInputChange = (newVal: string): void => {
    setInput(newVal);
  };

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    const foundCountry = getData(input);
    if (foundCountry) {
      if (searchedCountries.current.includes(foundCountry.Country_text)) {
        return;
      }
      updateData(foundCountry);
    }
  };

  return (
    <div>
      <TrackerForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        language={language}
      />
      {}
      <div className="mt-5">
        <TrackerTable data={data} language={language} />
      </div>
    </div>
  );
}
