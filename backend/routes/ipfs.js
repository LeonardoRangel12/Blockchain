var express = require("express");
var router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const ipfs = require("../controllers/ipfs");
const { createConnection } = require("../middleware/solana");
const { mintNFT } = require("../controllers/nft");
/* GET home page. */
router.post(
  "/upload",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "file",
      maxCount: 1,
    },
  ]),
  createConnection,
  ipfs.uploadFile,
  ipfs.addMetadata,
  mintNFT
);

module.exports = router;
