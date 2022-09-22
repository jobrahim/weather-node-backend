const app = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);



describe('Location Endpoints', () => {

  it('should return current location and status 200', async () => {

    const res = await requestWithSupertest.get('/v1/location');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('city');
    expect(res.body.status).toEqual('success');


  });


  it('should return status 404 with incorrect url', async () => {

    const res = await requestWithSupertest.get('/v1/locatio');

    expect(res.statusCode).toEqual(404);



  });

});
