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

router.get('/', getMe)
router.put('/', putMe)
router.delete('/', deleteMe)
router.get('/dog', getMyDog)
router.get('/request', getAllRequests)
router.put('/request/:requestId', putRequestById)
router.get('/request/:requestId', getRequestById)
router.delete('/request/:requestId', deleteRequestById)

module.exports = router
