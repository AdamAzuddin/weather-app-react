import React from "react";
import sunny from "./sunny.png";

const SquareWidget = ({ name, onClick }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: "whitesmoke",
        margin: "10px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    >
      <text>{name}</text>
      <img src={sunny} alt="Sunny" style={{ width: 100 }} />
    </div>
  );
};

export default SquareWidget;
