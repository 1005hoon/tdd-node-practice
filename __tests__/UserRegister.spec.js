const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');
const sequelize = require('../src/config/db');

// initialize db
beforeAll(() => {
  return sequelize.sync();
});

// clean user table before each table to allow independency of all tests
beforeEach(() => {
  return User.destroy({ truncate: true });
});

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

  test('returns success message when signup request is valid', async (done) => {
    const { body } = await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });
    expect(body.message).toBe('User Created');
    done();
  });

  test('saves the user to database', async (done) => {
    // save user
    await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });

    // query to see if user is saved
    const users = await User.findAll();
    expect(users.length).toBe(1);
    done();
  });

  test('saves the username and email to database', async (done) => {
    // save user
    await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });

    // query to see if user is saved
    const users = await User.findAll();
    const user = users[0];
    expect(user.username).toBe('user1');
    expect(user.email).toBe('user1@mail.com');
    done();
  });

  test('hashes the password in database', async (done) => {
    await request(app).post('/api/v1/users').send({
      username: 'user1',
      email: 'user1@mail.com',
      password: 'user123123',
    });

    const users = await User.findAll();
    const { username, email, password } = users[0];
    expect(username).toBe('user1');
    expect(email).toBe('user1@mail.com');
    expect(password).not.toBe('user123123');
    done();
  });
});
