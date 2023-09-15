import React, { useContext } from "react";
import gameContext from "../context/gameContext";
export default function Controls() {
  const {
    setComputerSelection,
    userSelection,
    setUserSelection,
    setUserCounter,
    setComputerCounter,
  } = useContext(gameContext);

  function getComputerSelection() {
    const options = ["scissors", "rock", "paper"];
    const randomNumberBetween0And2 = Math.floor(Math.random() * 3);
    return options[randomNumberBetween0And2];
  }

  function playComputer() {
    const computerSelection = getComputerSelection();

    setComputerSelection(computerSelection);
  }

  function resetGame() {
    setUserSelection(null);
    setComputerSelection(null);
    setUserCounter(0);
    setComputerCounter(0);
  }

  return (
    <div className="controls">
      <button onClick={playComputer} disabled={userSelection ? false : true}>
        Elegir
      </button>
      <button onClick={resetGame}>Reiniciar juego</button>
    </div>
  );
}
