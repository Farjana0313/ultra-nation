import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div>
      <h1>Country loaded: {countries.length} </h1>
      <h4>Country added: {cart.length} </h4>
      <div>
        <ul>
          {countries.map(country => <Country country={country} key={country.cca3
          } handleAddCountry={handleAddCountry}></Country>)}
        </ul>
      </div>
    </div>
    // this is comment
  );
}

export default App;
