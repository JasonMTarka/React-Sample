import React, { useState, useRef } from "react";
import axios from "axios";

import TrackerTable from "./TrackerTable";
import TrackerForm from "./TrackerForm";

export default function CovidCaseTracker() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const searchedCountries = useRef([]);

  const baseUrl = "https://covid-19.dataflowkit.com/v1/";

  const updateData = (url) => {
    if (searchedCountries.current.includes(input.toLowerCase())) {
      return;
    }

    axios.get(url).then((response) => {
      if (response.data.Country_text === "World") {
        console.log("Invalid Input");
        return;
      }
      const newData = [...data];
      newData.push(response.data);
      searchedCountries.current.push(response.data.Country_text.toLowerCase());
      setData(newData);
    });
  };

  const handleInputChange = (newVal) => {
    setInput(newVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      return;
    }
    const newUrl = baseUrl + input;
    updateData(newUrl);
  };

  return (
    <div>
      <TrackerForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {}
      <div className="mt-5">
        <TrackerTable data={data} />
      </div>
    </div>
  );
}
