const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const { urlencoded } = require('express');

// Connect to MongoDB
mongoose.connect('mongodb+srv://chanelc004:TpnRX5HKx4tM4Xvj@mongopractice.31wnwa8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Sample data for products
const productsData = [
  { name: 'Product 1', price: 10, description: 'Description of product 1', category: 'Category 1', image: `https://labwearstudios.com/cdn/shop/products/BlackHoodieFront_2149edc5-f13c-48dc-8730-de074c9b62e9_800x.png?v=1646383868`},
  { name: 'Product 2', price: 20, description: 'Description of product 2', category: 'Category 2', image: `https://paradoxeparis.com/cdn/shop/products/IMG_8461-min.png?v=1678279138&width=3000`},
  { name: 'Product 3', price: 30, description: 'Description of product 3', category: 'Category 1' },
  { name: 'Product 4', price: 40, description: 'Description of product 4', category: 'Category 2' },
  { name: 'Product 5', price: 50, description: 'Description of product 5', category: 'Category 3' }
];

// Sample data for users
const usersData = [
  { username: 'user1', email: 'user1@hairbox.com', password: 'password1', fullName: 'John Doe', address: 'Address 1', phoneNumber: '1234567890' },
  { username: 'user2', email: 'user2@example.com', password: 'password2', fullName: 'Jane Doe', address: 'Address 2', phoneNumber: '1234567891' },
  { username: 'user3', email: 'user3@example.com', password: 'password3', fullName: 'Hailey Moe', address: 'Address 3', phoneNumber: '1234567892' },
  { username: 'user4', email: 'user4@example.com', password: 'password4', fullName: 'Conner Smith', address: 'Address 4', phoneNumber: '1234567893' },
  { username: 'user5', email: 'user5@example.com', password: 'password5', fullName: 'Becky Happy', address: 'Address 5', phoneNumber: '1234567894' }
];

// Sample data for orders
const ordersData = [
  { user: 'user1_id', products: [{ product: 'product1_id', quantity: 2 }, { product: 'product2_id', quantity: 1 }], totalPrice: 60, status: 'Pending' },
  { user: 'user2_id', products: [{ product: 'product3_id', quantity: 1 }], totalPrice: 30, status: 'Confirmed' },
  { user: 'user3_id', products: [{ product: 'product1_id', quantity: 3 }, { product: 'product4_id', quantity: 2 }], totalPrice: 130, status: 'Shipped' },
  { user: 'user4_id', products: [{ product: 'product5_id', quantity: 1 }], totalPrice: 50, status: 'Delivered' },
  { user: 'user5_id', products: [{ product: 'product2_id', quantity: 2 }, { product: 'product3_id', quantity: 1 }, { product: 'product4_id', quantity: 1 }], totalPrice: 140, status: 'Pending' }
];

// Function for products collection
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(productsData);
    console.log('Sample products inserted successfully');
  } catch (err) {
    res.status(500).send("Something went wrong.");
  }
};
  
// Function for users collection
const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing data
    await User.insertMany(usersData);
    console.log('Sample users inserted successfully');
  } catch (error) {
    res.status(500).send("Something went wrong.");
  }
};

// Function for orders collection
const seedOrders = async () => {
  try {
    await Order.deleteMany(); // Clear existing data
    await Order.insertMany(ordersData);
    console.log('Sample orders inserted successfully');
  } catch (error) {
    res.status(500).send("Something went wrong.");
  }
};

// Run the seeding functions
seedProducts();
seedUsers();
seedOrders();