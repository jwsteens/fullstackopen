import { useState } from "react";

const Country = ({query, data}) => {
    if (!query) return null

    const filteredData = data.filter(country => country.name.official.toLowerCase().includes(query) || country.name.common.toLowerCase().includes(query))
    if (filteredData.length > 1 || filteredData.length == 0) return <div></div>

    const countryData = filteredData[0]
    console.log(countryData);
    
    const languages = Object.values(countryData.languages)
    console.log(languages);
    

    /*

    Return:
    Name as header
    Capital
    Land area
    Languages (list)
    Flag

    */

    return (
        <div>
            <h2>{countryData.name.common}</h2>
            <p>
                Capital: {countryData.capital[0]}<br/>
                Land area: {new Intl.NumberFormat('fr-FR').format(countryData.area)} km²
            </p>
            <ul>
                Languages:
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <img src={countryData.flags.svg} alt={`Flag of ${countryData.name.common}`}/>
        </div>
    )
}

export default Country