const PubSub = require('../helpers/pub_sub.js');


// select constructor
const SelectView = function(element){
  this.element = element;
};

// binding events
SelectView.prototype.bindEvents = function () {
  // subscribe - CountriesData:countries-loaded
  PubSub.subscribe("CountriesData:countries-loaded", (event) =>{
    const allCountries = event.detail;
    this.populate(allCountries);
  });
  // listen for user selection
this.element.addEventListener("change", (event)=> {
  const selectedCountryIndex = event.target.value;
  // publish - country selected
  PubSub.publish("SelectView:country-selected", selectedCountryIndex);
  console.log("select view country index", selectedCountryIndex);
});

};

// populate the drop down
SelectView.prototype.populate = function (allCountries) {
  allCountries.forEach((country, index) =>{
    const option = document.createElement("option");
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });

};




module.exports = SelectView;
