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

router.get('/',getMe)
router.put('/', putMe)
router.delete('/', deleteMe)
router.get('/dog', getMyDog)
router.get('/requests', getAllRequests)
router.put('/requests/:requestId', putRequestById)
router.get('/requests/:requestId', getRequestById)
router.delete('/request/:requestId', deleteRequestById)

module.exports = router