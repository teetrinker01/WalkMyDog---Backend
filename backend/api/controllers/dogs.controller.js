const DogModel = require('../models/dog.model')
const { handleError } = require('../utils')

module.exports = {
  createDog,
  getAllDogs,
  getDogById,
  updateDogById,
  deleteDogById,
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
