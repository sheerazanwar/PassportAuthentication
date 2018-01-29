const express = require('express');
var app = express();

var router = express.Router();

var user = require('../api/user.js');

var path = require('path')
router.post('/register', user.register);


module.exports = router;
