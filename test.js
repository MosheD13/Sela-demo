const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return AM ISRAEL HAI!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('AM ISRAEL HAI!');
  });
});
