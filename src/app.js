require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const arenaRoutes = require('./routes/arena');
const vendorRoutes = require('./routes/vendor');
const assignmentRoutes = require('./routes/assignment');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// db connection
connectDB();

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// routes
app.use('/arena', arenaRoutes);
app.use('/vendor', vendorRoutes);
app.use('/assignment', assignmentRoutes);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

module.exports = app;
