const app = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);



describe('Location Endpoints', () => {

  it('should return current location and current weather data', async () => {

    const res = await requestWithSupertest.get('/v1/current');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('weather');
    expect(res.body).toHaveProperty('coord');


  });

  it('should return an especific location and current weather data of the city', async () => {

    const res = await requestWithSupertest.get('/v1/current/paris');

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Paris');
    expect(res.body).toHaveProperty('weather');



  });

  it('should return an status 500 if parameter city do not exist', async () => {

    const res = await requestWithSupertest.get('/v1/current/australi');

    expect(res.statusCode).toEqual(500);



  });


});


