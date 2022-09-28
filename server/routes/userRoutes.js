const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController.js');

router.post('/newUser', registerUser);
router.post('/login', loginUser);

module.exports = router;