var express = require('express');
var router = express.Router();
const cookieParser = require("cookie-parser");
var wallet = require('../controllers/wallet');

router.use(cookieParser());
// Envía una transferencia al la API de Solana
router.post('/transfer', wallet.transfer)
// Crea la cookie de la publicKey
router.post("/connect", wallet.connect);  
// Elimina la cookie de la publicKey
router.get("/disconnect", wallet.disconnect);
// Verifica si existe la cookie de la publicKey
router.get("/login", wallet.login);

module.exports = router;
