import Weather from "./components/Weather";
import "./App.css";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "ankara" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units}).then((data)=>{
        setWeather(data)
      })
      // console.log(data);
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="App">
      <h1>Weather APP</h1>
      {weather && (
        <div>
        <Forecast items={weather.list}/>
        <Weather weather={weather} setQuery={setQuery} />
        </div>
      )}
    </div>
  );
}

export default App;
