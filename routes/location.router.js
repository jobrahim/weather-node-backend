const express = require('express');
const LocationService = require('../services/location.service');
const router = express.Router();
const service = new LocationService();

router.get('/',
  async (req, res, next) => {
    try {
      console.log("inside location endpoint");
      const location = await service.findLocation();
      const loc = res.status(200).json({status: "success", city: location});
     return loc;
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;
