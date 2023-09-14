import React from "react";

export default function Controls({ setComputerSelection }) {
  function getComputerSelection() {
    const options = ["scissors", "rock", "paper"];
    const randomNumberBetween0And2 = Math.floor(Math.random() * 3);
    return options[randomNumberBetween0And2];
  }

  function playComputer() {
    const computerSelection = getComputerSelection();

    setComputerSelection(computerSelection);
  }

  return (
    <div>
      <button onClick={playComputer}>Get computer selection</button>
    </div>
  );
}
