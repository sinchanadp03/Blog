const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateAuthorInput = require('../middleware/validationMiddleware');

// Login endpoint
router.post('/login', validateAuthorInput, authController.login);

// Register endpoint
router.post('/register', validateAuthorInput, authController.register);

module.exports = router;
