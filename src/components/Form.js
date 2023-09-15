import React, { useContext } from "react";
import gameContext from "../context/gameContext";
export default function Form() {
  const { setUserName } = useContext(gameContext);

  function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = e.target.elements.username.value;
    setUserName(usernameValue);
    console.log(usernameValue);
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
