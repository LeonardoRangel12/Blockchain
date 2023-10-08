var express = require('express');
var router = express.Router();
var User = require('../controllers/user');
/* GET users listing. */
router.get('/random', async function(req, res, next) {
  res.send(await User.getRandomUser(req, res, next));
});

module.exports = router;
