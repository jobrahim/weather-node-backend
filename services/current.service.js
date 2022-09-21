require('dotenv').config();
const {KEY} = process.env;
const { urlWeather } = require("../constants/constants");
const callUrl = require('../utils/callUrl');
const { publicIp } = require("../constants/constants");
const { location } = require("../constants/constants");


class CurrentService {

  constructor( ){
  }

  async find(city) {

    if(!city){
      const {ip} = await callUrl(publicIp);
      const data = await callUrl(location + ip);
      city = data.city;
    }

   let urlCity = `${urlWeather}?q=${city}&appid=${KEY}`;


   const data = await callUrl(urlCity);


  return data;
  }


}

module.exports = CurrentService;
