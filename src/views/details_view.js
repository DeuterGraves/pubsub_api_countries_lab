const PubSub = require('../helpers/pub_sub.js');

// details constructor
const DetailsView = function(container){
  this.container = container;
};

//  selectedCountry

// binding events
DetailsView.prototype.bindEvents = function (selectedCountry) {
  // subscribe "CountriesData:country-ready", selectedCountryObject
  PubSub.subscribe("CountriesData:country-ready", (event) =>{
    this.clearCountry();
    // const country = event.detail;
    this.render(event.detail);
    // console.log("Detail View country object:", country);
  });

};


// render
DetailsView.prototype.render = function (country) {
  // is this redundant?
  // const infoArea = document.querySelector("div#country");
  // - name
  const countryName = this.createTextElement("h2", country.name)
  // countryName.textContent = country.name
  console.log("country name", countryName);

  // - region
  const regionTitle = this.createTextElement("h3", "Region:")
  const countryRegion = this.createTextElement("p", country.region);
  console.log("country region", countryRegion);

  // - flag
  const countryFlag = document.createElement("img");
  countryFlag.setAttribute("src", country.flag);
  countryFlag.setAttribute("alt", `${ country.demonym } flag. `);
  countryFlag.setAttribute("width", "300");
  console.log("flag", countryFlag);

  // populateLanguageList
  const languagesTitle = this.createTextElement("h3", "Languages:");

  const languagesList = document.createElement("ul");
  this.populateLanguageList(country.languages, languagesList);


  // infoArea.appendChild(countryName);
  this.container.appendChild(countryName)
  this.container.appendChild(countryFlag);
  this.container.appendChild(regionTitle);
  this.container.appendChild(countryRegion);
  this.container.appendChild(languagesTitle);
  this.container.appendChild(languagesList);
  // infoArea.appendChild(country/Region);
};

DetailsView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

DetailsView.prototype.populateLanguageList = function (languages, list) {
  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
};

DetailsView.prototype.clearCountry = function () {
  this.container.innerHTML = '';
};


module.exports = DetailsView;
