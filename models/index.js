const sequelize = require('../config/db');
const Book = require('./book');
const ReturnedBook = require('./returnedBook');

const syncDB = async ({}) => {
  await sequelize.sync();
};

module.exports = { Book, ReturnedBook, syncDB };
