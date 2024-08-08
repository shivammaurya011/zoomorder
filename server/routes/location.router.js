const express = require('express')
const locationController = require('../controllers/location.controllers')
const router = express.Router()

router.get('/', locationController.getLocation)
router.post('/add', locationController.addLocation)

module.exports = router