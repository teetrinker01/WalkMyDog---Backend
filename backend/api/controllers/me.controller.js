const UserModel = require('../models/users')
const DogModel = require('../models/dog.model')
const RequestModel = require('../models/request.model')
const RatingModel = require('../models/rating.model')
// comprobar si creamos controller de requests
const { handleError } = require('../utils')

    module.exports = {
    getMe,
    putMe,
    deleteMe,
    getMyDog,
    getAllRequests,
    putRequestById,
    getRequestById,
    deleteRequestById
    }

    function getMe (req, res) {
    UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
    }

    function putMe (req, res) {
        UserModel
          .findByIdAndUpdate(res.locals.user._id, req.body, {
            new: true,
            select: 'name email',
            runValidators: true
          })
          .then(response => {
            var result = {
              token: '',
              name: '',
              email: ''
            }
            res.json(response)
          })
          .catch((err) => handleError(err, res))
      }






    function createRequest (req, res) {
    RequestModel
    .create({
        ...req.body,
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
    }



      function createDog (req, res) {
        DogModel
        .create({
          ...req.body,
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
      }


      function getAllDogs (req, res) {
        DogModel
          .find()
          .then(response => res.json(response))
          .catch((err) => handleError(err, res))
      }

      function getDogById (req, res) {
        DogModel
          .findById(req.params.id)
          .then(response => res.json(response))
          .catch((err) => handleError(err, res))
      }

      function deleteDogById (req, res) {
        DogModel
          .remove({ _id: req.params.id })
          .then(response => res.json(response))
          .catch(err => handleError(err, res))
      }

      function updateDogById (req, res) {
        DogModel
          .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          })
          .then(response => res.json(response))
          .catch((err) => handleError(err, res))
      }

      function createRequest (req, res) {
        RequestModel
        .create({
          ...req.body,
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
      }

      function postDogRating (req, res) {
        RatingModel
        .create({
          ...req.body,
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
      }