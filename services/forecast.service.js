require('dotenv').config();
const {KEY} = process.env;
const { urlforecastFive} = require("../constants/constants");
const callUrl = require('../utils/callUrl');
const LocationService = require('../services/location.service');
const locationService = new LocationService();


class ForecastService {

  constructor(){
  }

  async find(city) {

    if(!city){
      city = await locationService.findLocation();
    }

    let urlCity = `${urlforecastFive}?q=${city}&appid=${KEY}`;

    const data = await callUrl(urlCity);

  return data;
  }



}

module.exports = ForecastService;
