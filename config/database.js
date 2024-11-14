const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost', // Default to localhost if not set
  username: process.env.DB_USER || 'your_default_user',
  password: process.env.DB_PASSWORD || 'your_default_password',
  database: process.env.DB_NAME || 'your_default_db',
  dialect: 'postgres', 
});


module.exports = sequelize;
