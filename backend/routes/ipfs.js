var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const ipfs = require("../controllers/ipfs");
const { createConnection } = require('../middleware/solana');
/* GET home page. */
router.post('/upload', upload.single('file'), createConnection, ipfs.uploadFile, ipfs.createNFT);

module.exports = router;
