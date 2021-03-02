const request = require('supertest');
const app = require('../src/app');

describe('User Registration', () => {
  test('returns 200 OK when signup request is valid', async (done) => {
    const { statusCode } = await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });
    expect(statusCode).toBe(201);
    done();
  });

  test('returns succes message when signup request is valid', async (done) => {
    const { body } = await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });
    expect(body.message).toBe('User Created');
    done();
  });
});
