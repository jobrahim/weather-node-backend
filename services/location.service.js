const { publicIp } = require("../constants/constants");
const { location } = require("../constants/constants");
const callUrl = require("../utils/callUrl");
class LocationService {


  async findLocation() {


    const {ip} = await callUrl(publicIp);

    const {city} = await callUrl(location + ip);


  return city;
  }


}

module.exports = LocationService;
