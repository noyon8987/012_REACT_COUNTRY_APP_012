import React from "react";

export default function Country(props) {
  const { flags, name, capital, area, population, region } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  }

  return (
    <article>
      <div className="box">
        <img src={flags.png} />
        <h1>Name: {name.common}</h1>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Region: {region}</h3>
        <h3>Area: {area}</h3>
        <button onClick={()=>{
            handleRemoveCountry(name.common)
        }}>Remove Country</button>
      </div>
    </article>
  );
}
