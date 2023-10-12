var express = require('express');
var router = express.Router();
const cookieParser = require("cookie-parser");
var wallet = require('../controllers/wallet');
const { createConnection } = require('../middleware/solana');

router.use(cookieParser());
// Crea la cookie de la publicKey
router.post("/connect", wallet.connect);  
// Elimina la cookie de la publicKey
router.get("/disconnect", wallet.disconnect);
// Verifica si existe la cookie de la publicKey
router.get("/login", wallet.login);
// Muestra el balance de la wallet
router.get("/getBalance", createConnection, wallet.checkBalance);

module.exports = router;
