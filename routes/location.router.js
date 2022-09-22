const express = require('express');
const LocationService = require('../services/location.service');
const router = express.Router();
const service = new LocationService();

router.get('/',
  async (req, res, next) => {
    try {

      const location = await service.findLocation();
      res.status(200).json({status: "success", city: location});
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;
