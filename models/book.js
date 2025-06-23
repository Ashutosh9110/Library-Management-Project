const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  issuedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  returnDue: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fine: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Book;
