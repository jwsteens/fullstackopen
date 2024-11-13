import axios from 'axios'

const getCountries = () => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(res => {
      return res.data
    })
}

const getWeather = (lat, lon) => {
  const api_string = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,is_day,precipitation,surface_pressure,wind_speed_10m,snowfall,cloud_cover&forecast_days=1`

  return axios
    .get(api_string)
    .then(res => res.data)
}

export default { getCountries, getWeather }