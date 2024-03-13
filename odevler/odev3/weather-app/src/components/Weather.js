import { useEffect, useState } from "react";
import axios from "axios";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
function Weather({
  weather: {
    dt,
    country,
    name,
    timezone,
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    humidity,
    feels_like,
    description,
    main
  },
  setQuery,
}) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apikey = "a60b119069661eb7afa78bf4b96780e8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a60b119069661eb7afa78bf4b96780e8`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      // axios
      //   .get(url)
      //   .then((response) => {
      //     setData(response.data);
      //     console.log(response.data);
      //   })
      //   .finally(() => setLocation(""));
      if (location !== "") {
        setQuery({ q: location });
      }
      setLocation("");
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          className="cityInput"
          value={location}
          placeholder="Enter Location"
          onChange={(event) => setLocation(event.target.value)}
          onKeyUp={searchLocation}
        />
      </div>
      <div className="weather-image">
      <img src={iconUrlFromCode(icon)} alt="" />
      </div>
      <div className="weather-details">{main} ({description})</div>
      <div className="weather-temp">{temp.toFixed()} C°</div>
      <div className="weather-location">{name}</div>
      <div className="data-container">
        <div className="element">
          <div className="data">
            <div className="humidity">{humidity.toFixed()} %</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="feels-like">{feels_like.toFixed()}°</div>
            <div className="text">Feels Like</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
