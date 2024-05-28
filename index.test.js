const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('AM ISRAEL HAI!');
});

test('GET / should return AM ISRAEL HAI!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('AM ISRAEL HAI!');
    expect(response.statusCode).toBe(200);
});
