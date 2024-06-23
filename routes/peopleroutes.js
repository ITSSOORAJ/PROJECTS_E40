const express = require('express')
const { getallpeople, getpeoplebyid, addpeople, updatepeople,deletepeople } = require('../controllers/peoplecontroller')
const router = express.Router()

router.get('/',getallpeople )
// get movie by id
router.get('/:peopleId',getpeoplebyid )
//add new movie
router.post('/',addpeople)
//update a movie
  router.patch('/:peopleId',updatepeople )
// delete a movie
router.delete('/:peopleId',deletepeople)



module.exports = router