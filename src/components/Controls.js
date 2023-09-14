import React, { useContext } from "react";
import gameContext from "../context/gameContext";
export default function Controls() {
  const { setComputerSelection, userSelection } = useContext(gameContext);
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
      <button onClick={playComputer} disabled={userSelection ? false : true}>
        Get computer selection
      </button>
    </div>
  );
}
