import React from "react";

const SquareWidget = ({ color }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        margin: "10px",
      }}
    ></div>
  );
};

export default SquareWidget;
