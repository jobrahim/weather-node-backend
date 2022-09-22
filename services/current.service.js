require('dotenv').config();
const {KEY} = process.env;
const { urlWeather } = require("../constants/constants");
const callUrl = require('../utils/callUrl');
const LocationService = require('../services/location.service');
const locationService = new LocationService();

class CurrentService {

  constructor( ){
  }

  async find(city) {

    if(!city){

      city = await locationService.findLocation();
    }

   let urlCity = `${urlWeather}?q=${city}&appid=${KEY}`;


   const data = await callUrl(urlCity);


  return data;
  }


}

module.exports = CurrentService;
