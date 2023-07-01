const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { connectDB } = require('./config/ecommdb');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// DB Connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/sellers', require('./routes/sellerRoute'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Backend is listening at port ${port}`);
});