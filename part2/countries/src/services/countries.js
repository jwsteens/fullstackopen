import axios from 'axios'

const getCountries = () => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(res => {
      return res.data
    })
}

export default { getCountries }