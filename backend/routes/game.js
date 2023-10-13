const express = require("express");
const router = express.Router();
const GameController = require("../controllers/game");

// GET all games
router.get("/", GameController.getGames);
router.get("/:id", GameController.getGameById);
router.post("/", GameController.createGame);
router.post("/search", GameController.getGameBySearch);
router.put("/:id", GameController.updateGame);
router.delete("/:id", GameController.deleteGame);

module.exports = router;
