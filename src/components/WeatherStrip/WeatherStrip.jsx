import React, {useState, useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import WeatherBox from '../WeatherBox/WeatherBox';
import './WeatherStrip.css';

const WeatherStrip = () => {
  const data = useFetch();
  console.log(data);
  const mockData = [
    {
      day: 'Tue',
      weather: 'partially cloudy',
      high: 56,
      low: 45
    },
    {
      day: 'Wed',
      weather: 'partially cloudy',
      high: 56,
      low: 45
    },
    {
      day: 'Thu',
      weather: 'partially cloudy',
      high: 56,
      low: 45
    },
    {
      day: 'Fri',
      weather: 'partially cloudy',
      high: 56,
      low: 45
    },
    {
      day: 'Sat',
      weather: 'partially cloudy',
      high: 56,
      low: 45
    }
  ]

  return (
    <div className='weather-strip-container'>
      {mockData.map((d, i) => (
        <WeatherBox day={d} key={i}/>
      ))}
    </div>
  )
}

export default WeatherStrip;
