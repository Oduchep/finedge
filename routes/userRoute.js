const express = require('express')
const router = express.Router()
const {userControllers} = require('../controllers/userController')

router.route('./user').post(userControllers)