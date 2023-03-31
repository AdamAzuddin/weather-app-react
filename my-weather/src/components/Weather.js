import React, { useState, useEffect } from "react";
import sunny from "./sunny.png";
import axios from "axios";

const Weather = ({ name }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=728aa78f35ceb1acb144f937f063bb4c`
      );

      setWeatherData(res.data);
    };
    fetchData();
  }, [name]);

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
      {weatherData && (
        <div>
          <img src={sunny} alt="Sunny" style={{ width: "100px" }} />
          <h2>{weatherData.name}</h2>
          <h2>Current temperature: {weatherData.main.temp}</h2>
          <h2>Weather description: {weatherData.weather[0].description}</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
