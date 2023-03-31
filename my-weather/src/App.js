import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SquareWidgets from "./components/SquareWidgets";
import React, { useState, useEffect } from "react";


function App() {
  const [selectedLocation, setSelectedLocation] = useState("Kuala Lumpur");

  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName);
  };

  const [weatherData, setWeatherData] = useState(null);

  

  return (
    <div className="App">
      <Header onLocationSelect={handleLocationSelect} />
      <Weather name={selectedLocation} weatherData={weatherData} setWeatherData={setWeatherData} />
      <SquareWidgets onLocationSelect={handleLocationSelect} />
    </div>
  );
}

export default App;
