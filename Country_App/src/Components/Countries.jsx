import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

export default function Countries(props) {
    console.log(props.countries)
  return (
    <div className="main_div">
      <section>
        {props.countries.map((country) => {
          const newCountry = { country, id: uuidv4() };
          return <Country {...newCountry} key={newCountry.id} onRemoveCountry = {props.onRemoveCountry}/>;
        })}
      </section>
    </div>
  );
}
