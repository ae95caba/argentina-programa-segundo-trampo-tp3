import React, { useEffect, useState } from "react";

export default function Scoreboard({ userSelection, computerSelection }) {
  const [userCounter, setUserCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);

  function determineWinnerAndUpdateCounter(computerSelection, userSelection) {
    console.log(computerSelection, userSelection);
    if (userSelection === computerSelection) {
      // It's a tie
      // You can handle ties here if needed
    } else if (
      (userSelection === "rock" && computerSelection === "scissors") ||
      (userSelection === "scissors" && computerSelection === "paper") ||
      (userSelection === "paper" && computerSelection === "rock")
    ) {
      // User wins
      setUserCounter((prev) => prev + 1);
    } else {
      // Computer wins
      setComputerCounter((prev) => prev + 1);
    }
  }

  useEffect(() => {
    console.log("user effect ");
    if (computerSelection) {
      console.log("user effect  inside if");
      determineWinnerAndUpdateCounter(computerSelection, userSelection);
    }
  }, [computerSelection]);

  return (
    <div>
      <p>
        <span>User</span>:{userCounter}
      </p>
      <p>Computer:{computerCounter}</p>
    </div>
  );
}
