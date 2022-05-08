import { useState, useEffect } from "react";

const useFetch = (numDays) => {
    const [weatherData, setWeatherData] = useState(null);
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=47.608013&lon=-122.335167&exclude=current,minutely,hourly&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // parse data here
                const parsed = data.daily.slice(0, numDays).map((d, index) => {
                    const dayName = new Date(d.dt * 1000)
                        .toString()
                        .slice(0, 3);
                    const {min, max} = d.temp;
                    const {main, icon} = d.weather[0];

                    return { 
                      day: dayName,
                      min: Math.floor(min),
                      max: Math.floor(max),
                      weather: {
                        main,
                        icon
                      }
                    };
                });
                setWeatherData(parsed);
            });
    }, []);
    return weatherData;
};

export default useFetch;
