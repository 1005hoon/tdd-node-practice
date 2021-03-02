const request = require('supertest');
const app = require('../app');

test('returns 200 OK when signup request is valid', async (done) => {
  const { statusCode, body } = await request(app).post('/api/v1/users').send({
    username: 'user1',
    email: 'user1@mail.com',
    password: 'user123123',
  });
  expect(statusCode).toBe(200);
  done();
});
