const express = require('express');
const { getallauthor, getauthorbyid, updateauthor, deleteauthor, addauthor } = require('../controllers/authcontroller'); // Correct path to controller
const router = express.Router();

// Test route
router.get('/', getallauthor);

// Get author by ID
router.get('/:authorId', getauthorbyid);

// Add new author
router.post('/', addauthor);

// Update a author
router.patch('/:authorId', updateauthor);

// Delete a author
router.delete('/:authorId', deleteauthor);

module.exports = router;
