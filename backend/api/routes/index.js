const router = require('express').Router()

const authRouter = require('./auth.router')
const dogsRouter = require('./dogs.router')
const usersRouter = require('./users.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/dogs', dogsRouter)
router.use('/users', usersRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
