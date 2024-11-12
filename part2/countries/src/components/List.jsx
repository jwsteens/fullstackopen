import { useState } from "react";

const CountryListItem = ({countryData}) => {
  
  return (
    <li>
      {countryData.name.common}
    </li>
  )
}

const List = ({query, data}) => {

  const filteredData = data.filter(country => country.name.official.toLowerCase().includes(query) || country.name.common.toLowerCase().includes(query))

  if (filteredData.length > 10) return <div><p>Too many matches!</p></div>
  if (filteredData.length == 0) return <div><p>No matches!</p></div>

  return (
    <div>
      <ul>
        {filteredData.map((countryData, index) => {        
          return <CountryListItem countryData={countryData} key={index}/>
        })}
    </ul>
    </div>
  )
}

export default List