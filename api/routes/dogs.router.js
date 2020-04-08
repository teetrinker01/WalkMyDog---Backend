const router = require('express').Router()

const {
  createDog,
  getAllDogs,
  getDogById,
  updateDogById,
  deleteDogById,
  createRequest,
  postDogRating
} = require('../controllers/dogs.controller')

router.post('/', createDog)
router.get('/', getAllDogs)
router.get('/:dogid', getDogById)
router.put('/:dogid', updateDogById)
router.delete('/:dogid', deleteDogById)
router.post('/:dogid/request', createRequest)
router.post('/:dogid/rating', postDogRating)

module.exports = router
