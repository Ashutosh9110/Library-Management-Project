const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ReturnedBook = sequelize.define('ReturnedBook', {
  originalBookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorName:{
    type: DataTypes.STRING,
    allowNull: false
  },
  returnedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fine: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = ReturnedBook;
  