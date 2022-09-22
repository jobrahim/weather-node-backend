const app = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);



describe('Location Endpoints', () => {

  it('should return forecast for 5 days of the current city', async () => {

    const res = await requestWithSupertest.get('/v1/forecast');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('list');
    expect(res.body.list[0]).toHaveProperty('weather');
    expect(res.body).toHaveProperty('city');


  });

  it('should return forecast for 5 days of a specific city', async () => {

    const res = await requestWithSupertest.get('/v1/forecast/paris');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('list');
    expect(res.body.list[0]).toHaveProperty('weather');
    expect(res.body).toHaveProperty('city');
    expect(res.body.city.name).toEqual('Paris');


  });

  it('should return an status 500 if parameter city do not exist', async () => {

    const res = await requestWithSupertest.get('/v1/current/australi');

    expect(res.statusCode).toEqual(500);



  });


});


