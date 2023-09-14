import "./App.css";
import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Hands from "./components/Hands";
import ComputerHands from "./components/ComputerHands";
import Controls from "./components/Controls";
import gameContext from "./context/gameContext";
import Form from "./components/Form";
function App() {
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [userName, setUserName] = useState(null);

  return (
    <gameContext.Provider
      value={{
        userSelection,
        setUserSelection,
        computerSelection,
        setComputerSelection,
        setUserName,
        userName,
      }}
    >
      <div className="App">
        {userName ? (
          <>
            <Scoreboard />
            <Hands />
            <ComputerHands />
            <Controls />
          </>
        ) : (
          <Form />
        )}
      </div>
    </gameContext.Provider>
  );
}

export default App;
