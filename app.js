require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/examples', exampleRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
