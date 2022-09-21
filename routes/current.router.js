const express = require('express');

const CurrentService = require('../services/current.service');

const router = express.Router();
const service = new CurrentService();

router.get('/:city',
  async (req, res, next) => {
    try {
      const { city } = req.params;
      const current = await service.find(city);
      res.json(current);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
