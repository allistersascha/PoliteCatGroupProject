const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/favegames') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//////Authentification

router.get('/', ensureAuth, gamesController.getFavorites)

router.post('/createFave', gamesController.createFave)

router.delete('/deleteFave', gamesController.deleteFave)

module.exports = router