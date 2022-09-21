const getPublicIp = require("../utils/getPublicIp")

describe('GetCity function', () => {

  test('should to return the current ip address', async () => {

    const ip = await getPublicIp();
    expect(ip).tobe
   })
 })
