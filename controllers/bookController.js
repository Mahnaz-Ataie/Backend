// controllers/bookController.js
const fs = require('fs');
const { Op } = require('sequelize'); // Import Op for Sequelize operators
const Book = require('../Models/Book'); // Import the Sequelize Book model
const path = require('path');

// Get the download link for a book
exports.downloadBook = (req, res) => {
    const bookId = req.params.id;

    // Assuming books are stored as files in a 'books' directory
    const filePath = path.join(__dirname, '../books', `book_${bookId}.pdf`); // Adjust file path as needed

    res.download(filePath, err => {
        if (err) {
            res.status(500).json({ error: 'File not found or unable to download' });
        }
    });
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(); // Fetch all books from the database
    res.json(books); // Send books as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};

// Get details of a specific book
exports.getBookDetails = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id); // Find book by primary key (ID)
    if (!book) {
      return res.status(404).json({ message: 'Book not found' }); // Handle not found case
    }
    res.json(book); // Send book details as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
};




