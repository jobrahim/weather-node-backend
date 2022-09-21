const { expectationFailed } = require("@hapi/boom")
const { request } = require("express")
const router = require("../routes/current.router")



describe('GET /current', () => {
  test(' should respond with a 200 status code', async () => {

    const response = await request(router).get('/current').send()

    expectationFailed(response.status).toBe('200')
  })
})
