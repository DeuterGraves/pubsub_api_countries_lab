const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const CountriesData = function(data){
  this.data = data;
};

CountriesData.prototype.getData = function () {
  const request = new RequestHelper("https://restcountries.eu/rest/v2/all");
  request.get((countriesData) => {
    this.data = countriesData;
    // console.dir(countriesData);
    PubSub.publish("CountriesData:countries-loaded", countriesData);
  })
};

CountriesData.prototype.bindEvents = function () {
  PubSub.subscribe("SelectView:country-selected", (event) => {
    const selectedCountryIndex = event.detail;
    // console.log("CountriesData country index", selectedCountryIndex);
    const selectedCountryObject = this.data[selectedCountryIndex];
    // console.log("countries data from bind events", this.data);
    // console.log(selectedCountryIndex);

    PubSub.publish("CountriesData:country-ready", selectedCountryObject);
    // console.dir(selectedCountryObject);
  });

};

module.exports = CountriesData;
