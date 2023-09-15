import "./App.css";
import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Hands from "./components/Hands";
import ComputerHands from "./components/ComputerHands";
import Controls from "./components/Controls";
import gameContext from "./context/gameContext";
import Form from "./components/Form";
import intro from "./assets/intro.mp4";
function App() {
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userCounter, setUserCounter] = useState(0);
  const [computerCounter, setComputerCounter] = useState(0);
  return (
    <gameContext.Provider
      value={{
        userSelection,
        setUserSelection,
        computerSelection,
        setComputerSelection,
        userCounter,
        setUserCounter,
        computerCounter,
        setComputerCounter,
        setUserName,
        userName,
      }}
    >
      <>
        {userName ? (
          <>
            <Scoreboard />
            <Hands />
            <Controls />
            <ComputerHands />
          </>
        ) : (
          <>
            <Form />
            <video controls>
              <source src={intro} type="video/mp4" autoPlay />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </>
    </gameContext.Provider>
  );
}

export default App;
