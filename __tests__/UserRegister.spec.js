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
  const createValidUser = async (username = 'user1', email = 'user1@mail.com', password = 'user123123') => {
    return await request(app).post('/api/v1/users').send({
      username,
      email,
      password,
    });
  };

  test('returns 201 Created when signup request is valid', async () => {
    const { statusCode } = await createValidUser();
    expect(statusCode).toBe(201);
  });

  test('returns success message when signup request is valid', async () => {
    const { body } = await createValidUser();
    expect(body.message).toBe('User Created');
  });

  test('saves the user to database', async () => {
    // save user
    await createValidUser();

    // query to see if user is saved
    const users = await User.findAll();
    expect(users.length).toBe(1);
  });

  test('saves the username and email to database', async () => {
    // save user
    await createValidUser();

    // query to see if user is saved
    const users = await User.findAll();
    const user = users[0];
    expect(user.username).toBe('user1');
    expect(user.email).toBe('user1@mail.com');
  });

  test('hashes the password in database', async () => {
    await createValidUser();
    const users = await User.findAll();
    const { username, email, password } = users[0];
    expect(username).toBe('user1');
    expect(email).toBe('user1@mail.com');
    expect(password).not.toBe('user123123');
  });
});
