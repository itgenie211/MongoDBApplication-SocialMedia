const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Create a user
router.post('/', UserController.createUser);

// Read all users
app.get('/', UserController.getAllUsers);

// Read a user by ID
app.get('/:id', UserController.getUserById);

// Update a user
router.patch('/:id', UserController.updateUser);

// Delete a user
router.delete('/:id', UserController.deleteUser);

module.exports = router;