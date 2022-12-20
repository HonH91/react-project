import React, { useState } from "react";
import axios from "axios";

export default function SearchCity() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState({});

  function fillWeather(response) {
    setTemperature({
      temp: response.data.main.temp
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "36a717eec39806fbbc78f488b14440d9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fillWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Find a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );
  return (
    <div>
      {form}
      <ul>
        <li>Temperature: {Math.round(temperature.temp)}°C</li>
      </ul>
    </div>
  );
}
