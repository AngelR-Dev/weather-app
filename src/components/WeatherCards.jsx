import React, { useState } from "react";
import cloud from "../assets/cloud.png";
import clear from "../assets/clear.jpg"

const WeatherCards = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemp = () => setIsCelsius(!isCelsius);

  console.log(weather);

  // const updateTime = () => {
  //   let update = []
  //   const time = []
  //   if (weather) {
  //     time[0] = weather.weather[0].description
  //   }

  //   if (time = 'scattered clouds' || 'broken clouds') {
  //     update = cloud
  //   } else if (time = 'clear sky' || 'few clouds') {
  //     update = clear
  //   }
  //   console.log(update)
  // } 
  // updateTime()



  return (
    <div className="container" style={{ backgroundImage: `url(${cloud})` }}>
      <article className="card">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">{weather?.name}</h2>
        <section className="card__first-section">
          <img
            className="card__icon"
            src={
              weather
                ? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
                : ""
            }
            alt=""
          />
        </section>
        <section className="card__second-section">
          <h3 className="second__title">"{weather?.weather[0].description}"</h3>
          <ul className="second__list">
            <li className="second__item">
              <span className="second__span">Wind speed:</span>
              {weather?.wind.speed} m/s{" "}
            </li>
            <li className="second__item">
              <span className="second__span">Clouds:</span>
              {weather?.clouds.all} %
            </li>
            <li className="second__item">
              <span className="third__span">Pressure:</span>
              {weather?.main.pressure} hPa
            </li>
            <li className="second__item">
              <span>Humidity:</span> {weather?.main.humidity}
            </li>
          </ul>
        </section>
        <h2 className="card__temp">
          Temp: {isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}
        </h2>
        <button className="card__btn" onClick={changeTemp}>
          {isCelsius ? "Change to °F" : "Change to °C"}
        </button>
      </article>
    </div>
  );
};

export default WeatherCards;
