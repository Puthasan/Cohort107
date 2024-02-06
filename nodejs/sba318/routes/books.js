


const express = require('express');
const router = express.Router();
const fs = require('fs');

// Data
const booksData = require('../data/books.json');

// GET all books
router.get('/', (req, res) => {
  res.json(booksData);
});

// GET a specific book by ID
router.get('/:id', (req, res) => {
  const bookId = req.params.id;
  const book = booksData.find(book => book.id === parseInt(bookId));

  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// POST a new book
router.post('/', (req, res) => {
  const newBook = req.body;
  newBook.id = booksData.length + 1;

  booksData.push(newBook);
  fs.writeFileSync('./data/books.json', JSON.stringify(booksData));

  res.json(newBook);
});

// PUT (Update) a specific book by ID
router.put('/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;

  booksData.forEach((book, index) => {
    if (book.id === parseInt(bookId)) {
      booksData[index] = updatedBook;
    }
  });

  fs.writeFileSync('./data/books.json', JSON.stringify(booksData));

  res.json(updatedBook);
});

// DELETE a specific book by ID
router.delete('/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBooks = booksData.filter(book => book.id !== parseInt(bookId));

  fs.writeFileSync('./data/books.json', JSON.stringify(updatedBooks));

  res.send(`Book with ID ${bookId} deleted`);
});

module.exports = router;