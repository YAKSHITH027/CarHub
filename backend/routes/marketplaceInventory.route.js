const express = require('express')
const {
  getCars,
  addCar,
  updateCar,
  deleteCar,
} = require('../controllers/marketplaceInventory.contoller')
const { isAuthonticated } = require('../middlewares/isAuthonticated')

const marketplaceInventory = express.Router()

marketplaceInventory.get('/', getCars)
marketplaceInventory.post('/add', isAuthonticated, addCar)
marketplaceInventory.patch('/update/:carId', isAuthonticated, updateCar)
marketplaceInventory.delete('/delete/:carId', isAuthonticated, deleteCar)

module.exports = { marketplaceInventory }
