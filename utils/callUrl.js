const { default: axios } = require("axios");



const callUrl = async (url) => {

const urlOptions = {
  method: 'GET',
  url: `${url}`,
  };

const {data} = await axios.request(urlOptions);



return data;

};

module.exports = callUrl;
