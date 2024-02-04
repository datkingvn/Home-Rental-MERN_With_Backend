const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const menuRoute = require('./routes/menu.route');
const cartRoute = require('./routes/cart.route')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8888;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Config
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connect MongoDB Success!");
}).catch((error) => {
    console.log("Connect MongoDB Failed!", error);
});

// Import Routes
app.use('/menu', menuRoute)
app.use('/carts', cartRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})