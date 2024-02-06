"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  weather: {
    main: string;
  }[];
}
function weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    const api =
      "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=1411b23f65d3a8f226bf29268581fbe9";
    const fetchData = async () => {
      try {
        const resp = await axios.get<WeatherData>(api);
        const weatherData = resp.data;
        setWeatherData(weatherData);
      } catch (err) {
        console.log("Error occured: " + err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      test
      {weatherData && (
        <div>
          <p>weather in : {weatherData.name}</p>
          <p> temp: {weatherData.main.temp}</p>
          <p>feels_like: {weatherData.main.feels_like}</p>
            <p></p>
        </div>
      )}
    </div>
  );
}

export default weather;
