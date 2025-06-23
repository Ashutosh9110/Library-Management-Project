const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.post('/books', controller.issueBook);
router.get('/books', controller.getBooks);
router.get('/returned', controller.getReturnedBooks);
router.post('/return/:id', controller.returnBook);

module.exports = router;
