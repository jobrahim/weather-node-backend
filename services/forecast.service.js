require('dotenv').config();
const {KEY} = process.env;
const { urlforecastFive} = require("../constants/constants");
const { publicIp } = require("../constants/constants");
const { location } = require("../constants/constants");
const callUrl = require('../utils/callUrl');

class ForecastService {

  constructor(){
  }

  async find(city) {

    if(!city){
      const {ip} = await callUrl(publicIp);
      const data = await callUrl(location + ip);
      city = data.city;
    }

    let urlCity = `${urlforecastFive}?q=${city}&appid=${KEY}`;

    const data = await callUrl(urlCity);

  return data;
  }



}

module.exports = ForecastService;
