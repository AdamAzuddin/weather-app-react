import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import SquareWidgets from "./components/SquareWidgets";
import React, { useState } from "react";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("New York");

  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName);
  };

  return (
    <div className="App">
      <Header onLocationSelect={handleLocationSelect} />
      <Weather name={selectedLocation} />
      <SquareWidgets onLocationSelect={handleLocationSelect} />
    </div>
  );
}

export default App;
