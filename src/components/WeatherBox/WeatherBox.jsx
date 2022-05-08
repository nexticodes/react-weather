import React from 'react';
import './WeatherBox.css'

const WeatherBox = ({day}) => {
  return (
    <div className="weather-box">
        <h2>{day.day}</h2>
        <img src={`http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}/>
        <div className="weather-temp">
          <h1 className="temp-high"> {day.max}&#176; </h1>
          <h1 className="temp-low"> {day.min}&#176; </h1>
        </div>
    </div>
  )
}

export default WeatherBox;