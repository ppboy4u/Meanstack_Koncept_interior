var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;

const Joi = require('joi')
const passport = require('passport')
 
//const User = require('../models/user')

var User = require('../models/user').default;

// Register 
router.get('/register', function (req, res) {
	res.render('register');
});

// Login
router.get('/loginpage', function (req, res) {
	res.render('loginpage');
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
