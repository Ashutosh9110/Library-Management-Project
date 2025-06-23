const sequelize = require('../config/db');
const Book = require('./book');
const ReturnedBook = require('./returnedBook');

const syncDB = (options) => sequelize.sync(options);

module.exports = { Book, ReturnedBook, syncDB };