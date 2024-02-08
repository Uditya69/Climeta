"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    main: string;
  }[];
}

function weather() {
  const [city, setCity] = useState<string>("Delhi");

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    const token = "1411b23f65d3a8f226bf29268581fbe9";
    const api =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      token +
      "&units=metric";
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
  }, [city]);

  function changecity() {
    const newCity = prompt("Enter Your city: ");
    if (newCity) setCity(newCity);
  }

  return (
    <div>
      <div className="">
        {weatherData && (
          <div className="flex flex-col items-center m-auto gap-3 border p-5 border-gray-600 rounded-2xl backdrop-blur-xl">
            <div className="text-7xl flex flex-col items-center gap-3">
              {weatherData.main.temp}°C{" "}
              <p className="text-5xl">{weatherData.weather[0].main}</p>
            </div>
            <div
              className="flex flex-row text-xl max-w-[60%]"
              onClick={changecity}
            >
              <CiLocationOn />
              <p>{weatherData.name}</p>
            </div>

            <div
              id="min_max-temp"
              className=" flex flex-row gap-3 items-center justify-center w-full"
            >
              <div className="flex flex-col border p-[5%] rounded-xl border-red-900">
                <p>MAX</p> <p>{weatherData.main.temp_max} °C</p>
              </div>
              <div className="flex flex-col border p-[5%] rounded-xl border-sky-900 ">
                <p>MIN</p> <p>{weatherData.main.temp_min} °C</p>
              </div>
            </div>
            <div id="other weather stat" className="flex flex-row gap-3">
              <div className="flex flex-col items-center">
                <p>Wind Speed</p>
                <p>{weatherData.wind.speed} km/h</p>{" "}
              </div>
              
              <div className="flex flex-col items-center">
                <p>Humidity</p> <p>{weatherData.main.humidity}%</p>{" "}
              </div>
              <div className="flex flex-col items-center">
                <p>Feels Like</p> <p>{weatherData.main.feels_like} °C</p>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="fixed "><InputForm isVisible={showModal} onclose={setShowModal(false)} /></div> */}
    </div>
  );
}

export default weather;
