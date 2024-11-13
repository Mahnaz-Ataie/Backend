const { Sequelize } = require('sequelize');

// Direct connection for Render (replace with actual database URL from Render)
const sequelize = new Sequelize('postgres://postgres:postgres@host:port/Library_System', {
  dialect: 'postgres', // Dialect for PostgreSQL
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Ensures SSL is used on Render
      rejectUnauthorized: false // Allows self-signed certificates if needed
    }
  }
});

module.exports = sequelize;
