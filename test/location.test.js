const locationRouter = require('../routes/location.router');
const supertest = require('supertest');
const requestWithSupertest = supertest(locationRouter);


//console.log("requestWithSupertest", await requestWithSupertest.get('/'));

describe('Location Endpoints', () => {

  it('GET /location should show current weather of current city', async () => {

    const res = await requestWithSupertest.get('/');
   // console.log("res:", res);
   // expect(res).toEqual("Quilmes");
    expect(res.statusCode).toEqual(200);
   // expect(res).toEqual(expect.stringContaining('json'));

  });

});
