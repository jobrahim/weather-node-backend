const express = require('express');
const locationRouter = require('./location.router');
const currentRouter = require('./current.router');
const forecastRouter = require('./forecast.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/v1', router);
  router.use('/location', locationRouter);
  router.use('/current', currentRouter);
  router.use('/forecast', forecastRouter);

}

module.exports = routerApi;
