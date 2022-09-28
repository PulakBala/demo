import React from 'react';
import './country.css'

const Country = (props) => {
    const {area,population,name,region,flags} = props.country
    console.log(props)
    return (
        <div className='country'>
            <p>Country Find</p>
            <h2>Country Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <img src={flags.png} alt="" />
            <h3>Area : {area}</h3>
            
            <h3>region: {region}</h3>
        </div>
    );
};

export default Country;