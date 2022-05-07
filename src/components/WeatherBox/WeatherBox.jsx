import React from 'react';
import './WeatherBox.css'

const WeatherBox = ({day}) => {
  return (
    <div className="weather-box">
        <h2>{day.day}</h2>
        <img src={''}/>
        <h2>{day.weather}</h2>
        <div className="weather-temp">
          <h1 className="temp-high"> {day.high}&#176; </h1>
          <h1 className="temp-low"> {day.low}&#176; </h1>
        </div>
    </div>
  )
}

export default WeatherBox;