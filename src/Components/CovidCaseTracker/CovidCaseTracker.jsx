import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import TrackerTable from "./TrackerTable";
import TrackerForm from "./TrackerForm";

export default function CovidCaseTracker({ language }) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const allData = useRef([]);
  const searchedCountries = useRef([]);

  useEffect(() => {
    const url = "https://covid-19.dataflowkit.com/v1";
    axios
      .get(url)
      .then((response) => {
        allData.current = response.data;
      })
      .then(() => {
        const newData = [];
        const defaults = ["USA", "Japan", "UK"];
        for (let country of defaults) {
          const countryData = getData(country);
          newData.push(countryData);
          searchedCountries.current.push(countryData.Country_text);
        }
        setData(newData);
      });
    return;
  }, []);

  const updateData = (countryData) => {
    const newData = [...data];
    newData.push(countryData);
    searchedCountries.current.push(countryData.Country_text);
    setData(newData);
  };

  const getData = (countryName) => {
    for (let country of allData.current) {
      if (country.Country_text === countryName) {
        return country;
      }
    }
  };

  const handleInputChange = (newVal) => {
    setInput(newVal);
  };

  const handleSubmit = (event) => {
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
