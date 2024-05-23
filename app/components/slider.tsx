"use client";
import React from "react";
import { useState } from "react";

const Slider = ({ rtScore }: { rtScore: number }) => {
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
      <button
        className="btn btn-primary"
        onClick={() => {
          alert(
            value === rtScore
              ? "You guessed correctly!"
              : `You guessed ${value}%. The correct answer was ${rtScore}%.`
          );
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Slider;
