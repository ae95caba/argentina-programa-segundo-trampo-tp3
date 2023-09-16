import React, { useContext } from "react";
import gameContext from "../context/gameContext";
import clickSound from "../assets/click-button.mp3";
//muestra las opciones del jugador (papel, piedra y tijera)
//y manda al estado su eleccion
export default function Hands() {
  const { setUserSelection, userSelection } = useContext(gameContext);

  //guarda el data-value de la imagen seleccionada en el estado
  function handleClick(e) {
    const userHandPick = e.target.getAttribute("data-value");
    const audio = new Audio(clickSound);
    audio.play();
    setUserSelection(userHandPick);
  }

  return (
    <div className="hands-container">
      <h3>Selecciona una opcion:</h3>
      <div className="hands">
        <img
          onClick={handleClick}
          src="https://img.freepik.com/vector-premium/icono-tijeras-corte-concepto-tijeras-abiertas_74669-470.jpg?w=2000"
          alt=""
          data-value="scissors"
          className={userSelection === "scissors" ? "active" : ""}
        />
        <img
          onClick={handleClick}
          src="https://elcomercio.pe/resizer/0NTL2WSmZaVDgXKBWHXTTHZPF34=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/T2CUKPVKLBG6DJJLJ7K3UQ2XFA.jpg"
          alt=""
          data-value="rock"
          className={userSelection === "rock" ? "active" : ""}
        />
        <img
          onClick={handleClick}
          src="https://graficaigc.com.ar/wp-content/uploads/2022/04/opalinaobra-1.jpg"
          alt=""
          data-value="paper"
          className={userSelection === "paper" ? "active" : ""}
        />
      </div>
    </div>
  );
}
