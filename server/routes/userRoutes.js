const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController.js');

router.post('/newUser', registerUser);
// router.get('/login', loginUser);

module.exports = router;