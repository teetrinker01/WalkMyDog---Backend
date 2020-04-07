const router = require('express').Router()

const {
  getMe,
  putMe,
  deleteMe,
  getMyDog,
  getAllRequests,
  putRequestById,
  getRequestById,
  deleteRequestById
} = require('../controllers/me.controller')

router.get('/me',getMe)
router.put('/me', putMe)
router.delete('/me', deleteMe)
router.get('/me/dog', getMyDog)
router.get('/me/requests', getAllRequests)
router.put('/me/requests/:requestId', putRequestById)
router.get('/me/requests/:requestId', getRequestById)
router.delete('/me/request/:requestId', deleteRequestById)

module.exports = router