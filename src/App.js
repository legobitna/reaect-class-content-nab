import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";

const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0); //react hook
  let [counter3, setCounter3] = useState(0);

  const increase = () => {
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    console.log("useEffect!!");
  }, []);

  useEffect(() => {
    console.log("second useEffect!!", counter2, counter3);
  }, [counter2, counter3]);

  return (
    <div>
      {console.log("render")}
      <h1>{counter3}</h1>
      <h1>{counter2}</h1>
      <button onClick={increase}>increase!!</button>
    </div>
  );
}

export default App;
