// In your Models/user.js (or whatever the model file is)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Make sure to require your Sequelize instance

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Ensure the email is unique
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User', // This should match your table name in the database
    tableName: 'users', // Ensure the table name is correct
    timestamps: true, // This will handle the `createdAt` and `updatedAt` fields if needed
});

module.exports = User;
