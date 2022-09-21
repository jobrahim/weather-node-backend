const { default: axios } = require("axios");
const { urlforecastFive, keyValue } = require("../constants/constants");
const getCity = require("../utils/getCity");
const getPublicIp = require("../utils/getPublicIp");

class ForecastService {

  constructor(){
  }

  async find(city) {

    if(!city){
      const ip = await getPublicIp();
      city = await getCity(ip);
    }

    let urlCity = `${urlforecastFive}?q=${city}&appid=${keyValue}`;

   const options = {
    method: 'GET',
    url: urlCity,
    };

    const { data } = await axios.request(options);


  return data;
  }



}

module.exports = ForecastService;
