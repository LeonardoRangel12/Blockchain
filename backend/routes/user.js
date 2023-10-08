var express = require('express');
var router = express.Router();
var User = require('../controllers/user');
/* GET users listing. */
router.get('/random', User.getRandomUser);

module.exports = router;
