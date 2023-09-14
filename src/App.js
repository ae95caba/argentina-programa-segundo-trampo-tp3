import "./App.css";
import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Hands from "./components/Hands";
import ComputerHands from "./components/ComputerHands";
import Controls from "./components/Controls";

function App() {
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  return (
    <div className="App">
      <Scoreboard
        computerSelection={computerSelection}
        userSelection={userSelection}
      />
      <Hands setUserSelection={setUserSelection} />
      <ComputerHands computerSelection={computerSelection} />
      <Controls setComputerSelection={setComputerSelection} />
    </div>
  );
}

export default App;
