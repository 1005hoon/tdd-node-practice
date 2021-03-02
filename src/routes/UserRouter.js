const express = require('express');
const { check } = require('express-validator');
// const { validateEmail, validateUsername } = require('../middleware/userValidation');
const { createUser } = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .post(
    check('username').notEmpty().withMessage('Username cannot be null'),
    check('email').notEmpty().withMessage('Email cannot be null'),
    createUser
  );

module.exports = router;
