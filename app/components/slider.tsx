"use client";
import React from "react";
import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={0}
        max="100"
        value={value}
        className="range range-primary range-lg"
        onChange={handleInputChange}
      />
      <p>Guess: {value}%</p>
    </div>
  );
};

export default Slider;
