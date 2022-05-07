import {useState, useEffect} from 'react'; 

const useFetch = (url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=47.608013&lon=-122.335167&appid=${process.env.REACT_APP_WEATHER_API_KEY}`) => {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          // parse data here
          setWeatherData(data)
        });
    }, []);
    return weatherData;
}

export default useFetch;