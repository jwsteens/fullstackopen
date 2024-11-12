import { useState } from "react";
import Country from './Country'

const CountryListItem = ({ countryData, onlyCountry }) => {
  const [ showCountry, setShowCountry ] = useState(false)
  const [ manualShowCountry, setManualShowCountry ] = useState(false)
  if (onlyCountry && !showCountry) setShowCountry(true)
  if (!onlyCountry && showCountry && !manualShowCountry) setShowCountry(false)

  return (
    <li className="countryListItem">
      {countryData.name.common}<br/>
      <button onClick={() =>{
        setShowCountry(!showCountry)
        setManualShowCountry(!manualShowCountry)
        }}>
          {showCountry ? "Hide" : "Show"} information
        </button>
      {showCountry ? <Country countryData={countryData}/> : null}
    </li>
  )
}

const List = ({query, data}) => {

  const filteredData = data.filter(country => country.name.official.toLowerCase().includes(query) || country.name.common.toLowerCase().includes(query))

  if (!query) return null
  if (filteredData.length > 10) return <div><p>Too many matches, keep searching!</p></div>
  if (filteredData.length == 0) return <div><p>No matches!</p></div>

  return (
    <container>
      <ul>
        {filteredData.map((countryData, index) => {           
          return <CountryListItem countryData={countryData} onlyCountry={filteredData.length == 1} key={index}/>
        })}
      </ul>
    </container>
  )
}

export default List