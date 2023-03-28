import React from "react";
import SquareWidget from "./SquareWidget";
import HorizontalScrollMenu from "react-horizontal-scrolling-menu";


const colors = ["red", "green", "blue", "yellow", "purple","red", "green", "blue", "yellow", "purple"];

const SquareWidgets = () => {
//TODO: make sure scrollable

    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        width: "200vw",
        scrollbarWidth:'none',
        scrollbars:'0',
        overflow:'hidden'

      }}
    >
      {colors.map((color, index) => (
        
        <SquareWidget key={index} color={color} />
      ))}
    </div>
  );
};

export default SquareWidgets;
