import React from "react";
import Table from "react-bootstrap/Table";

export default function TrackerTable({ data }) {
  const renderData = () => {
    return data.map((country) => (
      <tr key={country.Country_text}>
        <td>{country.Country_text}</td>
        <td>{country["New Cases_text"]}</td>
        <td>{country["New Deaths_text"]}</td>
        <td>{country["Total Cases_text"]}</td>
        <td>{country["Last Update"]}</td>
      </tr>
    ));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">New Cases</th>
          <th scope="col">New Deaths</th>
          <th scope="col">Total Cases</th>
          <th scope="col">Last Updated</th>
        </tr>
      </thead>
      <tbody>{renderData()}</tbody>
    </Table>
  );
}
