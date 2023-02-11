import React from 'react';

const Country = (props) => {
    const { name, population, region, flags } = props.country;
    // console.log(props.country)
    return (
        <div>
            <h4>{name.common}</h4>
            <img style={{ height: '50px' }} src={flags.png} />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    )
}
export default Country;
