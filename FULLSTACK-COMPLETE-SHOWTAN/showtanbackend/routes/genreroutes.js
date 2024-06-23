const express = require('express')
const { getallgenere } = require('../controllers/generecontrollers')
const { getgenerebyid } = require('../controllers/generecontrollers')
const { addgenere } = require('../controllers/generecontrollers')
const { updategenere } = require('../controllers/generecontrollers')
const { deletegenere } = require('../controllers/generecontrollers')
const router = express.Router()

router.get('/', getallgenere)
// get movie by id
router.get('/:genereId', getgenerebyid)
//add new movie
router.post('/',addgenere)
//update a movie
  router.patch('/:genereId', updategenere)
// delete a movie
router.delete('/:genereId', deletegenere)



module.exports = router