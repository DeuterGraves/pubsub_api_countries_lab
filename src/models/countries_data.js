const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const CountriesData = function(){
  this.data = null;
};

CountriesData.prototype.getData = function () {
  const request = new RequestHelper("https://restcountries.eu/rest/v2/all");
  request.get((countriesData) => {
    PubSub.publish("CountriesData:countries-loaded", countriesData);
    // console.dir(countriesData);
  })

};

module.exports = CountriesData;
