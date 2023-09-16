import React, { useContext } from "react";
import gameContext from "../context/gameContext";
import gameStartSound from "../assets/match-start.mp3";

//guarda en estado el nombre del jugador y permite iniciar el juego
//una ves se presione el boton JUGAR
export default function Form() {
  const { setUserName } = useContext(gameContext);

  //guarda el valor ingresado al estado
  function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = e.target.elements.username.value;
    setUserName(usernameValue);
    const audio = new Audio(gameStartSound);
    audio.play();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Ingresa tu nombre para comenzar</p>
        <input
          name="username"
          autoFocus
          required
          minLength={2}
          maxLength={10}
        />
      </label>
      <button>JUGAR</button>
    </form>
  );
}
