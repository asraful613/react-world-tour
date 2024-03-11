import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlag}) =>{
const {name,flags,population,area,capital,cca3} =country
const [visited,setVisited] =useState(false)
const handleVisited = () =>{
    setVisited(!visited);
}

const passWithParams = () => handleVisitedCountry(country);
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color:visited? 'purple':'black'}}>Name : {name?.common}</h3>
            <img src={flags?.png} alt={name?.common}/>
            <p>Population : {population}</p>
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br/>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br/>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ?  'i have visited this country.' : 'i want to visit'}
            <hr/>
            <CountryDetail country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryDetail>
        </div>
    );
};
export default Country;