import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState(
    "Click the button to get a random piece of advice"
  );

  const [id, setId] = useState("");

  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMessage(data.slip.advice);
      setId(data.slip.id);
    })
    .catch((error) => console.log(error));
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <div className="container">
        <p className="advice-id">ADVICE #{id}</p>
        <p className="advice-message">"{message}"</p>
        <img
          className="divider"
          src="./images/pattern-divider-mobile.svg"
          alt="divider"
        />
        <button className="randomizer" onClick={getAdvice}>
          <img
            className="button-icon"
            src="./images/icon-dice.svg"
            alt="dice icon"
          ></img>
        </button>
      </div>
    </>
  );
}

export default App;
