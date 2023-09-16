import React, { useContext } from "react";
import gameContext from "../context/gameContext";

//permite al usurario terminar su turno (sigue la copmutadora)
// y reiniciar el juego
export default function Controls() {
  const {
    setComputerSelection,
    userSelection,
    setUserSelection,
    setUserCounter,
    setComputerCounter,
  } = useContext(gameContext);

  //devuelve la seleccion de la computadora en forma de string
  function getComputerSelection() {
    const options = ["scissors", "rock", "paper"];
    const randomNumberBetween0And2 = Math.floor(Math.random() * 3);
    return options[randomNumberBetween0And2];
  }
  //usa el string de la funcion anterior para cambiar el estado
  function playComputer() {
    const computerSelection = getComputerSelection();

    setComputerSelection(computerSelection);
  }

  //reinicia los valores guardados en estado
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
