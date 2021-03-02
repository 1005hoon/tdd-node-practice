const express = require('express');
const { validateEmail, validateUsername } = require('../middleware/userValidation');
const { createUser } = require('../controllers/userController');
const router = express.Router();

router.route('/').post(validateEmail, validateUsername, createUser);

module.exports = router;
