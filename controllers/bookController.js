const { Book, ReturnedBook } = require('../models');

const ONE_HOUR = 60 * 60 * 1000;

exports.issueBook = async (req, res) => {
  const { name } = req.body;
  const now = new Date();

  const book = await Book.create({
    name,
    authorName: "Unknown Author", // You can assign based on name logic here
    issuedAt: now,
    returnDue: new Date(now.getTime() + ONE_HOUR),
  });

  res.status(201).json(book);
};


exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

exports.getReturnedBooks = async (req, res) => {
  const returned = await ReturnedBook.findAll();
  res.json(returned);
};

exports.returnBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const now = new Date();
  const fine = now > book.returnDue
  ? Math.ceil((now - book.returnDue) / (1000 * 60 * 60 * 24)) * 100
  : 0;

  await ReturnedBook.create({
    originalBookId: book.id,
    name: book.name,
    authorName: book.authorName,
    returnedAt: now,
    fine,
  });

  await book.destroy();

  res.status(200).json({ message: 'Book returned', fine });
};
