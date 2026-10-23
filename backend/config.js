require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  DASHBOARD_URL: process.env.DASHBOARD_URL || 'http://localhost:3001',
};
