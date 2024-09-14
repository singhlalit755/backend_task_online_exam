var express = require('express');
const router = express.Router()
var Controller = require('../controllers/index.js');

// Create new User
router.post('/addUser', Controller.UserController.addUser);   


module.exports = router;