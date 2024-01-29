const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

// Create an order
router.post('/', OrderController.createOrder);

// Read all orders
router.get('/', OrderController.getAllOrders);

// Read an order by ID
router.get('/:id', OrderController.getOrderById);

// Update an order
router.patch('/:id', OrderController.updateOrder);

// Delete an order
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;