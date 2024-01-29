const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');


// Create a product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a product
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String
  });
  
// Define indexes
productSchema.index({ name: 'text', description: 'text' });
  
// Define validation rules
productSchema.path('price').validate(function (value) {
    return value > 0;
  }, 'Price must be greater than 0');

module.exports = mongoose.model('Product', productSchema);

module.exports = router;