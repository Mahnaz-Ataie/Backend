require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Ensures SSL connection
      rejectUnauthorized: false // Accepts self-signed certificates
    }
  }
});

module.exports = sequelize;
