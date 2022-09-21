const express = require('express');
const ForecastService = require('../services/forecast.service');
const router = express.Router();
const service = new ForecastService();

router.get('/:city?',
  async (req, res, next) => {
    try {

      const { city } = req.params ? req.params : null;
      const forecast = await service.find(city);
      res.json(forecast);
    } catch (error) {
      next(error);
    }
  }
);





module.exports = router;
