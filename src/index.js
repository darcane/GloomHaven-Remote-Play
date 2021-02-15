import React from "react";
import ReactDOM from "react-dom";
import { PlayArea } from "./playArea.js";

function App() {
  return PlayArea();
}

ReactDOM.render(<App />, document.getElementById("root"));
