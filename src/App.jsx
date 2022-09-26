import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherCards from "./components/WeatherCards";
import Loading from "./components/Loading";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    // funcion callback cuando obtiene la info de ubicacion
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };

    //llamado a la api del navegador para obtener ubicacion
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  // ------------- Peticion del clima (api) ---------------

  useEffect(() => {
    if (coords) {
      const APIKEY = "e332a0d96c4c23ec7260c985c6847fc7";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.lon}&appid=${APIKEY}`;
      axios
        .get(URL)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1);
          setTemp({ celsius, farenheit });
          setWeather(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  console.log(weather);

  return (
    <div className="App">
      {
        weather ?
          <WeatherCards weather={weather} temp={temp} />
        :
          <Loading />
      }
    </div>
  );
}

export default App;
