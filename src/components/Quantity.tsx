"use client";
import React, { useState } from "react";

const Quantity = () => {
  let [num, setNum] = useState(1);
  return (
    <div className="flex items-center gap-x-2">
      {/* Minus  */}
      <button
        className="border center rounded-full h-7 w-7 center"
        onClick={() => {
          num <= 1 ? 1 : setNum(num - 1);
        }}
      >
        -
      </button>
      <div>{num}</div>
      <button
        className="border center rounded-full h-7 w-7 center"
        onClick={() => {
          setNum(num + 1);
          console.log(num);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
