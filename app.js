const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { errorHandler } = require('./src/middleware/errorHandler');
const cycleRoutes = require('./src/routes/cycleRoutes');

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

app.use('/cycles', cycleRoutes);

app.use(helmet({
  contentSecurityPolicy: false,
}));

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use(errorHandler);

module.exports = app;