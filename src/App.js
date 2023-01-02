import React from "react";
import Weather from "./WeatherApp";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />

        <footer>
          This project was coded by{" "}

          Hulnara Honchar
          {" "}
          and is{" "}
          <a
            href="https://github.com/HonH91/react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}