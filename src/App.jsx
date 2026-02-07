import { useState } from "react";

import Timer from "./components/Timer";
import Night from "./components/Night";
function App() {
  const [players, setPlayers] = useState([]);

  return (
    <>
    <Timer time={5} startTime={true} />
    <Night />
    </>
  )
}

export default App
