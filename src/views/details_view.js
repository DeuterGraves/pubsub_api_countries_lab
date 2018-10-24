const PubSub = require('../helpers/pub_sub.js');

// details constructor
const DetailsView = function(selectedCountry){
  this.selectedCountry = selectedCountry;
};


// binding events
DetailsView.prototype.bindEvents = function (selectedCountry) {
  // subscribe "CountriesData:country-ready", selectedCountryObject
  PubSub.subscribe("CountriesData:country-ready", (event) =>{
    const country = event.detail;
    this.render(country);
    console.log("Detail View country object:", country);
  });

};


// render
DetailsView.prototype.render = function (country) {
  // is this redundant?
  const infoArea = document.querySelector("div#country");
  // - name
  const countryName = document.createElement("h2");
  countryName.textContent = country.name
  console.log("country name", countryName);

  // - region
  const countryRegion = document.createElement("p");
  countryRegion.textContent = country.region
  console.log("country region", countryRegion);

  // - flag
  const countryFlag = document.createElement("img");
  countryFlag.setAttribute("src", country.flag);
  countryFlag.setAttribute("alt", `${ country.demonym } flag. `);
  countryFlag.setAttribute("width", "300");
  console.log("flag", countryFlag);

  infoArea.innerHTML = "";
  infoArea.appendChild(countryName);
  infoArea.appendChild(countryRegion);
  infoArea.appendChild(countryFlag);
};



module.exports = DetailsView;
