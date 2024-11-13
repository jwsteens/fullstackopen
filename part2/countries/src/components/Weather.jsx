import { useEffect, useState } from 'react'
import countryService from '../services/countries'

const Image = ({weather}) => {
  // https://openweathermap.org/weather-conditions#Icon-list

  const isDay = weather == 1 ? "d" : "n"

  if (weather.cloud_cover < 5) return <img src={`https://openweathermap.org/img/wn/01${isDay}@2x.png`}/>
  if (weather.snowfall > 0) return <img src={`https://openweathermap.org/img/wn/13${isDay}@2x.png`}/>
  if (weather.precipitation < 2) {
    if (weather.cloud_cover < 25) return <img src={`https://openweathermap.org/img/wn/02${isDay}@2x.png`}/> // Few
    if (weather.cloud_cover < 50) return <img src={`https://openweathermap.org/img/wn/03${isDay}@2x.png`}/> // Scattered
    return <img src={`https://openweathermap.org/img/wn/04${isDay}@2x.png`}/> // Broken/overcast
  }

  if (weather.cloud_cover < 25) return <img src={`https://openweathermap.org/img/wn/10${isDay}@2x.png`}/> // Few
  return <img src={`https://openweathermap.org/img/wn/09${isDay}@2x.png`}/>
}

const Weather = ({countryData}) => {
  /*
  Return weather at countryData.capitalInfo.latlng (Array)
  Temperature
  Apparent temperature
  Precipitation
  Surface pressure
  Wind speed (10m)
  Cloud coverage
  */
  const [ weather, setWeather ] = useState(null)
  const [ lat, lon ] = countryData.capitalInfo.latlng

  useEffect(() => {
    countryService
      .getWeather(lat, lon)
      .then(({ current, current_units }) => setWeather({ current, current_units }))
  }, [])

  if (!weather) return
  const { current, current_units } = weather

  return (
    <div>
      <h3>Weather in {countryData.capital[0]}</h3>
      <Image weather={current} />
      <p>
        Temperature: {current.temperature_2m} {current_units.temperature_2m}<br/>
        Apparent temperature: {current.apparent_temperature} {current_units.apparent_temperature}<br/>
        Precipitation: {current.precipitation} {current_units.precipitation}<br/>
        Pressure: {current.surface_pressure} {current_units.surface_pressure}<br/>
        Wind speed: {current.wind_speed_10m} {current_units.wind_speed_10m}<br/>
      </p>
    </div>
  )
}

export default Weather