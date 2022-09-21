const getCity = require("../utils/getCity");
const getPublicIp = require("../utils/getPublicIp");
class LocationService {


  async findLocation() {



    const ip = await getPublicIp();

      const city = await getCity(ip);

  return city;
  }


}

module.exports = LocationService;
