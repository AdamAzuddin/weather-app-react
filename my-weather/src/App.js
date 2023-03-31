import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SquareWidgets from "./components/SquareWidgets";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("Kuala Lumpur");
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationSelect = async (locationName) => {
    setSelectedLocation(locationName);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=728aa78f35ceb1acb144f937f063bb4c`
    );
    setWeatherData(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedLocation}&appid=728aa78f35ceb1acb144f937f063bb4c`
      );
      setWeatherData(res.data);
    };
    fetchData();
  }, [selectedLocation]);


  

  return (
    <div className="App">
      <Header onLocationSelect={handleLocationSelect} />
      <Weather
        name={selectedLocation}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
      <SquareWidgets onLocationSelect={handleLocationSelect} />
    </div>
  );
}

export default App;
