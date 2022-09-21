const { default: axios } = require("axios");
const { location } = require("../constants/constants");


const getCity = async (ip) => {

const optionsLoc = {
  method: 'GET',
  url: `${location}${ip}`,
  };

const loc = await axios.request(optionsLoc);

const {city } = loc.data;

return city;

};

module.exports = getCity;
