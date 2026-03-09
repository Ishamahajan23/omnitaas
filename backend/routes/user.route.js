const express = require('express');
const router = express.Router();
const {login, profile, logout} = require('../controllers/user.controller')
const authmiddleware = require('../middleware/user.middleware')


router.post('/login', login)

router.get('/profile',authmiddleware, profile)

router.post('/logout',authmiddleware, logout)


module.exports = router;