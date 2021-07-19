
import { tSParameterProperty } from "@babel/types";
import React, { useState, Fragment } from "react";
import "./App.css";
import GeoChart from './GeoChart'
import data from "./custom.geo.json"
// import ml5 from "ml5";
// import GaugeChart from "./GaugeChart";
// import useInterval from "./useInterval";

// let classifier;

function App() {
  const [property, setProperty] = useState("pop_est");

  return (
    <Fragment>
      <h1>World Map with D3</h1>
      {/* <GeoChart data={data} property={property} /> */}
      <h2>Select property to highlight</h2>
      <select value={property} onChange={event=> tSParameterProperty(event.target.value)}>
        <option value="pop_est">Population</option>
        <option value="name_len">Name Length</option>
        <option value="gdp_md_est">GDP</option>
      </select>

    </Fragment>
  );
}

export default App;