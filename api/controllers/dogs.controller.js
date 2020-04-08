const DogModel = require('../models/dogs.model')
const RequestModel = require('../models/request.model')
const RatingModel = require('../models/rating.model')
// comprobar si creamos controller de requests
const { handleError } = require('../utils')

module.exports = {
  createDog,
  getAllDogs,
  getDogById,
  updateDogById,
  deleteDogById,
  createRequest,
  postDogRating
}

function createDog (req, res) {
  DogModel
    .create({
      ...req.body
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
    .findById(req.params.dogid)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteDogById (req, res) {
  DogModel
    .remove({ _id: req.params.dogid })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateDogById (req, res) {
  DogModel
    .findByIdAndUpdate(req.params.dogid, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function createRequest (req, res) {
  RequestModel
    .create({
      ...req.body
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function postDogRating (req, res) {
  RatingModel
    .create({
      ...req.body
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
