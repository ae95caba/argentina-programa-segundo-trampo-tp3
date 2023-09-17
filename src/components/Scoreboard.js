import React, { useEffect, useState, useContext, useRef } from "react";
import gameContext from "../context/gameContext";
import Swal from "sweetalert2";
import victorySound from "../assets/victory.mp3";
import defeatSound from "../assets/violin.mp3";
import goodSound from "../assets/good.mp3";
import failSound from "../assets/fail.mp3";
//muestra el puntaje de la maquina y el usuario en pantalla

export default function Scoreboard() {
  const {
    userSelection,
    computerSelection,
    userName,
    setUserSelection,
    userCounter,
    setUserCounter,
    computerCounter,
    setComputerCounter,
    setComputerSelection,
  } = useContext(gameContext);

  //muestra en modal al terminar el juego que muestra al ganador final, con la opcion de reiniciar.
  useEffect(() => {
    let swalIcon;
    let swalTitle;
    let swalText;
    const playerWon = userCounter >= 3;
    const computerWon = computerCounter >= 3;
    let audioFile;

    if (playerWon || computerWon) {
      if (playerWon) {
        audioFile = victorySound;
        swalIcon = "success";
        swalText = "Ganaste 3 veces, felicidades";
      } else {
        audioFile = defeatSound;
        swalIcon = "error";
        swalText = "La computadora gano 3 veces, lo siento";
      }
      swalTitle = "Termino el juego";
      const audio = new Audio(audioFile);

      const displayAlert = () => {
        Swal.fire({
          title: swalTitle,
          text: swalText,
          icon: swalIcon,
          allowOutsideClick: false,
          confirmButtonText: "Reiniciar juego",
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform your custom action here when the "OK" button is clicked
            setUserSelection(null);
            setComputerSelection(null);
            setUserCounter(0);
            setComputerCounter(0);
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning
          }
        });
      };

      setTimeout(() => {
        displayAlert();
        audio.play();
      }, 500);
    }
  }, [userCounter, computerCounter]);

  //despues de que la computadora seleccione una opcion
  //se calcula al ganador entre la computadora y el usuario
  //de acuerdo a esto se modifica el contador(estado) y se muestra una alerta
  useEffect(() => {
    function updateCountersAndShowAlertAccordingToWinner(
      computerSelection,
      userSelection
    ) {
      let audioFile;
      let swalTitle;
      let swalIcon;
      let swalText;
      let isLastRound = false;
      if (userSelection === computerSelection) {
        // It's a tie

        swalTitle = "Es un empate";
      } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "scissors" && computerSelection === "paper") ||
        (userSelection === "paper" && computerSelection === "rock")
      ) {
        // User wins

        isLastRound = userCounter == 2;
        setUserCounter((prev) => prev + 1);
        audioFile = goodSound;
        swalIcon = "success";
        swalTitle = "Buen trabajo";
        swalText = `Ganaste: ${userSelection} le gana a ${computerSelection}`;
      } else {
        // Computer wins
        isLastRound = computerCounter == 2;
        setComputerCounter((prev) => prev + 1);
        audioFile = failSound;
        swalIcon = "error";
        swalText = `Perdiste: ${computerSelection} le gana a ${userSelection}`;
        swalTitle = "Mala suerte";
      }

      const audio = new Audio(audioFile);
      const displayAlert = () => {
        Swal.fire({
          title: swalTitle,
          icon: swalIcon,
          text: swalText,

          allowOutsideClick: false, // Prevent closing by clicking outside
        }).then((result) => {
          if (result.isConfirmed) {
            // Perform your custom action here when the "OK" button is clicked
            setUserSelection(null);
            setComputerSelection(null);
            audio.pause();
          }
        });
      };

      if (!isLastRound) {
        setTimeout(() => {
          displayAlert();
          audio.play();
        }, 500);
      }
    }

    if (computerSelection) {
      updateCountersAndShowAlertAccordingToWinner(
        computerSelection,
        userSelection
      );
    }
  }, [computerSelection]);

  return (
    <header>
      <p>
        {userName}: <AnimatedNumber value={userCounter} />
      </p>
      <p>
        Computadora:
        <AnimatedNumber value={computerCounter} />
      </p>
    </header>
  );
}

//es el numero que representa el puntaje del jugador y la maquina (1 por c/u)
//lo volvi un componente para poder animarlo cada que cambie su valor(props)
function AnimatedNumber({ value }) {
  const [isAnimating, setIsAnimating] = useState(false);

  function stopAnimation() {
    setIsAnimating(false);
  }

  useEffect(() => {
    setIsAnimating(true);
  }, [value]);
  return (
    <span
      className={
        isAnimating
          ? "animate__animated animate__flash animate__repeat-3 animate__faster"
          : ""
      }
      onAnimationEnd={() => stopAnimation()}
    >
      {value}
    </span>
  );
}
