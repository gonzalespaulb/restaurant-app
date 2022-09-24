const express = require('express');
const router = express.Router();
const { createNewOrder, fetchOrders } = require('../controllers/orderController.js');

router.post('/newOrder', createNewOrder);
router.get('/orders', fetchOrders);

module.exports = router;