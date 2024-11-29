import React, { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import Search from "./Components/Search";
import './style.css'

const url = "https://restcountries.com/v3.1/all";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemove = (name) => {
    const filter = countries.filter((country) => country.name.common !== name);
    setCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newContries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(newContries);
  };

  return (
    <div className="container">
      <h1 className="headline">Country App</h1>
      <Search onSearch={handleSearch} />
      {loading && <h1>Loading...</h1>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries countries={countries} onRemoveCountry={handleRemove} />
      )}
    </div>
  );
}
