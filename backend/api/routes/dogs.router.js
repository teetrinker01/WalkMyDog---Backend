const router = require('express').Router()

const {
  createDog,
  getAllDogs,
  getDogById,
  updateDogById,
  deleteDogById,
} = require('../controllers/dogs.controller')

router.post('/dogs',createDog)
router.get('/dogs', getAllDogs)
router.get('/dogs/:dogid', getDogById)
router.put('/dogs/:dogid', updateDogById)
router.delete('/dogs/:dogid', deleteDogById)

module.exports = router
