const { default: axios } = require("axios");
const { publicIp } = require("../constants/constants");


const getPublicIp = async () => {

const optionsIp = {
  method: 'GET',
  url: `${publicIp}`,
  };


  const ipadrress = await axios.request(optionsIp);

  const {ip} = ipadrress.data;

  return ip;

}

module.exports = getPublicIp;
