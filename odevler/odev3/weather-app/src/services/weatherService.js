import axios from "react";
import { DateTime } from "luxon";

const API_KEY = "a60b119069661eb7afa78bf4b96780e8";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    sys: { country, sunrise, sunset },
    dt,
  } = data;

  const { main: details, icon, description, main } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    description,
    main
  };
};

const formatForecastWeather = (data) => {
  console.log(data);
  let {
    city: { timezone, name },
    list,
  } = data;
  //   console.log(list.slice(0, 3));
  console.log(data);
  list = list.map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      time: d.dt_txt,
      temp: d.main.temp,
      icon: d.weather[0].icon,
      desc: d.weather[0].main,
    };
  });
  //   hourly = hourly.slice(1, 6).map((d) => {
  //     return {
  //       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
  //       temp: d.temp.day,
  //       icon: d.weather[0].icon,
  //     };
  //   });

  return { timezone, name, list };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    // exclude: "current,minutely,alerts",
    cnt:7,
    units: searchParams.units,
  }).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd, LLL, yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
