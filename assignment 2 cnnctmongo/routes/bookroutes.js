const express = require('express');
const { getallbook, getbookbyid, updatebook, deletebook, addbook } = require('../controllers/bookcontroller'); // Correct path to controller
const router = express.Router();

// Test route
router.get('/', getallbook);

// Get book by ID
router.get('/:bookId', getbookbyid);

// Add new book
router.post('/', addbook);

// Update a book
router.patch('/:bookId', updatebook);

// Delete a book
router.delete('/:bookId', deletebook);

module.exports = router;
