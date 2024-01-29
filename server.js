const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const Order = require('./models/Order');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://chanelc004:TpnRX5HKx4tM4Xvj@mongopractice.31wnwa8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Routes
app.use('/api/product', require('./routes/productRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

//Controllers
app.use('/api/user', userController); 
app.use('/api/product', productController); 
app.use('/api/order', orderController); 

//Models
app.use('/api/product', require('./models/Product'));
app.use('/api/user', require('./models/User')); 
app.use('/api/order', require('./models/Order')); 

//db
app.use('/api/seedDB', require('./utili/seedDB'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});