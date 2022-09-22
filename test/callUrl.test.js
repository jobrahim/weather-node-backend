const callUrl = require('../utils/callUrl');


describe('callUrl function', () => {

  it('should call a url and return a result', async () => {
    const res = await callUrl('http://ip-api.com/json/')
      expect(res.status).toEqual("success");
      expect(res).toHaveProperty('city')
  });

});
