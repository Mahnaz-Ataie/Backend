
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Library_System' , 'postgres' , 'postgres', {
  host: 'localhost',  // typically 'localhost'
  dialect: 'postgres',         // specify the dialect for PostgreSQL /specifies that you're using PostgreSQL

});

module.exports = sequelize;
