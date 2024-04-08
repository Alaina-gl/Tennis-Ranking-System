// implement backend retrieval here
require('dotenv').config();

const express = require('express');
const playerRoutes = require('./routes/players');

// Create express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/players', playerRoutes);

// Listen for requests
app.listen (process.env.PORT, () => console.log('Server running on port', process.env.PORT));