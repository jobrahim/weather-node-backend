const axios = require("axios");
const urlOptions = require("../constants/options");

class CurrentService {

  constructor(){
  }

  async find(city) {

    let urlCity = 'https://open-weather13.p.rapidapi.com/city/london';

    if(city) {
      urlCity = `https://open-weather13.p.rapidapi.com/city/${city}`;
    }

    const options = {
    method: 'GET',
    url: urlCity,
    headers: {
    'X-RapidAPI-Key': `${urlOptions.Key}`,
    'X-RapidAPI-Host': `${urlOptions.Host}`
        }
    };

    const { data } = await axios.request(options);


  return data;
  }

}

module.exports = CurrentService;
