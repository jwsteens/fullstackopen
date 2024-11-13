import { useState } from "react";

const Country = ({ countryData }) => {
    
    const languages = Object.values(countryData.languages)

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
            <img className="flag" src={countryData.flags.svg} alt={`Flag of ${countryData.name.common}`}/>
        </div>
    )
}

export default Country