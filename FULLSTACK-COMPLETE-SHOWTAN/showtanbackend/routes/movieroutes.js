const express = require('express');
const { getallmovie, getmoviebyid, updatemovie, deletemovie, addmovie } = require('../controllers/moviecontroller'); // Correct path to controller
const router = express.Router();

// Test route
router.get('/', getallmovie);

// Get movie by ID
router.get('/:movieId', getmoviebyid);

// Add new movie
router.post('/', addmovie);

// Update a movie
router.patch('/:movieId', updatemovie);

// Delete a movie
router.delete('/:movieId', deletemovie);

module.exports = router;
