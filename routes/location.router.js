const express = require('express');
const LocationService = require('../services/location.service');
const router = express.Router();
const service = new LocationService();

router.get('/',
  async (req, res, next) => {
    try {
      const location = await service.findLocation();

      return res.json(location);
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;
