import React, {useState, useEffect, useCallback} from 'react';
import useFetch from '../../hooks/useFetch';
import WeatherBox from '../WeatherBox/WeatherBox';
import './WeatherStrip.css';

const WeatherStrip = ({numDays}) => {
  const data = useFetch(numDays);
  return (
    <div className='weather-strip-container'>
      {data && data.map((d, i) => (
        <WeatherBox day={d} key={i}/>
      ))}
    </div>
  )
}

export default WeatherStrip;
