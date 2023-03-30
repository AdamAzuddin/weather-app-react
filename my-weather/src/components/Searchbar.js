import React, { useState } from "react";

const SearchBar = ({ onLocationSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Sample data for demonstration purposes
    const cities = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "Fort Worth",
      "Columbus",
      "San Francisco",
      "Charlotte",
      "Indianapolis",
      "Seattle",
      "Denver",
      "Washington DC",
      "Boston",
      "Nashville",
      "El Paso",
      "Detroit",
      "Memphis",
      "Portland",
      "Oklahoma City",
      "Las Vegas",
      "Louisville",
      "Baltimore",
      "Milwaukee",
      "Albuquerque",
      "Tucson",
      "Fresno",
      "Mesa",
      "Sacramento",
      "Atlanta",
      "Kansas City",
      "Colorado Springs",
      "Miami",
      "Raleigh",
      "Omaha",
      "Long Beach",
      "Virginia Beach",
      "Oakland",
      "Minneapolis",
      "Tulsa",
      "Wichita",
      "New Orleans",
      "Arlington",
    ];

    // Filter the cities based on the search term
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().startsWith(value)
    );

    setSuggestions(filteredCities);
  };

  const handleSelect = (city) => {
    setSearchTerm(city);
    setSuggestions([]);
    onLocationSelect(city);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchTerm}
        onChange={handleSearch}
      />

      {suggestions.length > 0 && (
        <ul style={{ paddingRight: "100px", paddingLeft: "100px" }}>
          {suggestions.map((city) => (
            <li
              key={city}
              style={{ backgroundColor: "whitesmoke", cursor: "pointer", border:"black" }}
              onClick={() => handleSelect(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
