
const upload = require('../server');
const { Op } = require('sequelize');

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

const Book = require('../Models/Book'); // Import the Sequelize Book model




// dowload book
router.get('/download/:id', bookController.downloadBook);

// Get all books
// router.get('/', bookController.getAllBooks);
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.render('index', { books }); // Render the index view with the books data
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// Get details of a specific book
router.get('/:id', bookController.getBookDetails);



module.exports = router;
