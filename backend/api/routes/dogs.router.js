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

router.post('/dogs',createDog)
router.get('/dogs', getAllDogs)
router.get('/dogs/:dogid', getDogById)
router.put('/dogs/:dogid', updateDogById)
router.delete('/dogs/:dogid', deleteDogById)
router.post('/dogs/:dogid/request', createRequest)
router.post('/dogs/:dogid/rating', postDogRating)



module.exports = router
