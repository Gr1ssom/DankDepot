// server.js
const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customers');
const productRoutes = require('./routes/products');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
