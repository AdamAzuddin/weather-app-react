import React from "react";
import sunny from "./sunny.png";

const Weather = ({ name }) => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{name}</h1>
      <img src={sunny} alt="Sunny" style={{ width: "100px" }} />
      <h2>Weather description</h2>
      <h2>Temperature</h2>
      <h2>Wind speed</h2>
    </div>
  );
};

export default Weather;
