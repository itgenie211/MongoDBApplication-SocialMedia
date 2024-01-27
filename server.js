const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social-media-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media App!');
});

// Use post routes
const postRoutes = require('./routes/posts');
app.use('/api', postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});