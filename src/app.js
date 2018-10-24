const CountriesData = require("./models/countries_data.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countriesData = new CountriesData();
  countriesData.getData();
});
