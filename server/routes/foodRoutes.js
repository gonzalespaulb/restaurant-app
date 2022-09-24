const express = require('express');
const router = express.Router();
const {createNewFood, fetchFoods} = require("../controllers/foodControllers.js");

router.post('/newFood', createNewFood);
router.get('/foods', fetchFoods);

module.exports = router;