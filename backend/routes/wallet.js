var express = require('express');
var router = express.Router();
var wallet = require('../controllers/wallet');

// Envía una transferencia al la API de Solana
router.post('/transfer', async function(req, res, next) {
  res.send(await wallet.transfer(req,res,next));
});

router.post("/connect", async function(req,res,next){

});

router.get("/disconnect", async function(req,res,next){

});

module.exports = router;
