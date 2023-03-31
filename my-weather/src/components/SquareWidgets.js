import React from "react";
import SquareWidget from "./SquareWidget";
import ScrollContainer from "react-indiana-drag-scroll";

const names = [
  "New York",
  "Kuala Lumpur",
  "Bangkok",
  "London",
  "Doha",
  "Paris",
  "Texas",
  "Moscow",
  "Delhi",
  "Mecca",
];

const SquareWidgets = ({ onLocationSelect }) => {
  const handleClick = (name) => {
    onLocationSelect(name);
  };

  return (
    <ScrollContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "hidden",
          width: "200%",
          scrollbarWidth: "none",
          scrollbars: "0",
          marginTop: "50px",
        }}
        className="example"
      >
        {names.map((name, index) => (
          <SquareWidget
            key={index}
            name={name}
            onLocationSelect={() => handleClick(name)}
          />
        ))}
      </div>
    </ScrollContainer>
  );
};

export default SquareWidgets;
