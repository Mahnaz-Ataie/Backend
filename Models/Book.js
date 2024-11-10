const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Use TEXT for longer descriptions
    allowNull: true, // Change to false if you want to require this field
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true, // Change to false if you want to require this field
  },
  filepath: { // New field for the downloadable file
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  
}, {
  timestamps: false, // Prevents Sequelize from adding `createdAt` and `updatedAt` fields
  tableName: 'books', // Specify the table name explicitly to match your database
});

module.exports = Book;
