// implement backend retrieval here
require('dotenv').config();

const express = require('express');
const playerRoutes = require('./routes/players');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/players', playerRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen (process.env.PORT, () => {
            console.log('Server running on port', process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

