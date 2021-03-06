const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleError } = require('../utils')

module.exports = {
  signup,
  login
}

function signup (req, res) {
  console.log(req.headers)
  UserModel
    .create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password || '', 10)
    })
    .then((doc) => {
      const token = jwt.sign(
        { email: req.body.email },
        process.env.SECRET, // TAKE SECRET KEY FROM .ENV
        { expiresIn: '1w' }
      )
      return res.json({
        token: token,
        email: req.body.email,
        name: req.body.name
      })
    })
    .catch(err => res.json({ error: err }))
}

function login (req, res) {
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user) { return res.json({ error: 'wrong email' }) }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) { handleError(err) }
        if (!result) { return res.json({ error: `wrong password for ${req.body.email}` }) }

        const token = jwt.sign(
          { email: user.email },
          process.env.SECRET,
          { expiresIn: '1h' }
        )

        return res.json({ token: token, email: user.email, name: user.name })
      })
    })
    .catch(err => handleError(err, res))
}
