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

const validUser = {
  username: 'user1',
  email: 'user1@mail.com',
  password: 'user123123',
};
const createUser = async (user = validUser) => {
  return await request(app).post('/api/v1/users').send(user);
};

describe('User Registration', () => {
  test('returns 201 Created when signup request is valid', async () => {
    const { statusCode } = await createUser();
    expect(statusCode).toBe(201);
  });

  test('returns success message when signup request is valid', async () => {
    const { body } = await createUser();
    expect(body.message).toBe('User Created');
  });

  test('saves the user to database', async () => {
    // save user
    await createUser();

    // query to see if user is saved
    const users = await User.findAll();
    expect(users.length).toBe(1);
  });

  test('saves the username and email to database', async () => {
    // save user
    await createUser();

    // query to see if user is saved
    const users = await User.findAll();
    const user = users[0];
    expect(user.username).toBe('user1');
    expect(user.email).toBe('user1@mail.com');
  });

  test('hashes the password in database', async () => {
    await createUser();
    const users = await User.findAll();
    const { username, email, password } = users[0];
    expect(username).toBe('user1');
    expect(email).toBe('user1@mail.com');
    expect(password).not.toBe('user123123');
  });

  test('returns 400 when username is null', async () => {
    const { statusCode } = await createUser({
      username: null,
      email: 'email123@mail.com',
      password: 'passwodr123',
    });
    expect(statusCode).toBe(400);
  });

  test('returns validationErrors field in response body when validation error occurs', async () => {
    const { body } = await createUser({
      username: null,
      email: 'email123@mail.com',
      password: 'passwodr123',
    });
    expect(body.validationErrors).not.toBeUndefined;
  });

  test('returns username cannot be null when username is null', async () => {
    const { body } = await createUser({
      username: null,
      email: 'email123@mail.com',
      password: 'passwodr123',
    });
    expect(body.validationErrors.username).toBe('Username cannot be null');
  });

  test('returns email cannot be null when email is null', async () => {
    const { body } = await createUser({
      username: 'user1',
      email: null,
      password: 'passwodr123',
    });

    expect(body.validationErrors.email).toBe('Email cannot be null');
  });

  test('returns errors for both when username and email is null', async () => {
    const { body } = await createUser({
      username: null,
      email: null,
      password: 'passwodr123',
    });

    expect(Object.keys(body.validationErrors)).toEqual(['username', 'email']);
  });
});
