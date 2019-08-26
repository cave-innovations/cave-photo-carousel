const request = require('supertest');
const app = require('../server/index');

test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});

describe('GET /api/photos/1', () => {
  test('It should respond with an array containing 1 listing', async () => {
    const response = await request(app).get('/api/photos/1');
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('listingId');
    expect(response.statusCode).toBe(200);
  });
});
