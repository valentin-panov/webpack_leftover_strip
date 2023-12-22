import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let btnLink;
  if (process.env.NODE_ENV !== "production") {
    alert("FIND ME IN THE CHUNK? /// NODE_ENV: " + process.env.NODE_ENV);
  }

  btnLink =
    process.env.PROD_MODE === "true"
      ? "https://production.com/"
      : `https://development.com/`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and {btnLink}
        </a>
      </header>
    </div>
  );
}

export default App;
