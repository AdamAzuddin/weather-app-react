import React from "react";
import sunny from "./sunny.png";

const SquareWidget = ({ color, name}) => {
  return (
    <div
      style={{
        width: "50%",
        height: "120px",
        backgroundColor: color,
        margin: "10px",
      }}
    >
      {name}
      <img src={sunny} alt="Sunny" style={{ width: 100 }} />
    </div>
  );
};

export default SquareWidget;
