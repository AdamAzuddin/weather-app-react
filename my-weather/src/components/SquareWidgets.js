import React from "react";
import SquareWidget from "./SquareWidget";
import ScrollContainer from "react-indiana-drag-scroll";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
];

const SquareWidgets = () => {

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
        }}
        className="example"
      >
        {colors.map((color, index) => (
          <SquareWidget key={index} color={color} />
        ))}
      </div>
    </ScrollContainer>
  );
};

export default SquareWidgets;
