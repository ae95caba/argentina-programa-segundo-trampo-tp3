import React, { useContext } from "react";
import gameContext from "../context/gameContext";

//guarda en estado el nombre del jugador y permite iniciar el juego
//una ves se presione el boton JUGAR
export default function Form() {
  const { setUserName } = useContext(gameContext);

  //guarda el valor ingresado al estado
  function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = e.target.elements.username.value;
    setUserName(usernameValue);
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
