const CountriesData = require("./models/countries_data.js");
const SelectView = require("./views/select_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countriesData = new CountriesData();
  countriesData.getData();

  // select view bind events
  const selectElement = document.querySelector("select#countries");
  const countryDropdown = new SelectView(selectElement)
  countryDropdown.bindEvents();
});
