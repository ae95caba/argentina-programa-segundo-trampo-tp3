import React, { useEffect, useState, useContext, useRef } from "react";
import gameContext from "../context/gameContext";
import Swal from "sweetalert2";
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

  //game ending logic
  useEffect(() => {
    let swalIcon;
    let swalTitle;
    let swalText;
    if (userCounter >= 3) {
      swalIcon = "success";
      swalText = "Ganaste 3 veces, felicidades";
    } else if (computerCounter >= 3) {
      swalIcon = "error";
      swalText = "La computadora gano 3 veces, lo siento";
    }
    if (userCounter >= 3 || computerCounter >= 3) {
      swalTitle = "Termino el juego";
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
        } else {
          // Handle other cases here
          console.log('Modal closed without clicking "OK"');
        }
      });
    }
  }, [userCounter, computerCounter]);

  //determine winner on computer pick
  useEffect(() => {
    function determineWinnerAndUpdateCounter(computerSelection, userSelection) {
      let swalTitle;
      let swalIcon;
      let swalText;

      if (userSelection === computerSelection) {
        // It's a tie

        swalTitle = "Es un empate";
      } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "scissors" && computerSelection === "paper") ||
        (userSelection === "paper" && computerSelection === "rock")
      ) {
        // User wins
        setUserCounter((prev) => prev + 1);

        swalIcon = "success";
        swalTitle = "Buen trabajo";
        swalText = `Ganaste: ${userSelection} le gana a ${computerSelection}`;
      } else {
        // Computer wins
        setComputerCounter((prev) => prev + 1);

        swalIcon = "error";
        swalText = `Perdiste: ${computerSelection} le gana a ${userSelection}`;
        swalTitle = "Mala suerte";
      }

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
        } else {
          // Handle other cases here
          console.log('Modal closed without clicking "OK"');
        }
      });
    }
    if (computerSelection) {
      determineWinnerAndUpdateCounter(computerSelection, userSelection);
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
