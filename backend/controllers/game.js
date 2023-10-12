const GameService = require("../services/Game");

exports.getGames = async (req, res) => {
  try {
    const games = await GameService.getGames();
    res.json({
      games: games
    });
  } catch (err) {
    console.error("err", err);
    res.status(500).json({
      message: "Games were not retrieved",
    });
  }
};

exports.getGameById = async (req, res) => {
  try {
    let game = await GameService.getGameById(req.params.id);
    res.json({
      game: game,
    });
  } catch (err) {
    console.error("err", err);
    res.status(404).json({
      message: "Game was not found",
    });
  }
};

exports.createGame = async (req, res) => {
  try {
    let gameSaved = await GameService.createGame(req.body);
    res.status(201).json({
      message: "Game created",
      gameSaved: gameSaved,
    });
  } catch (err) {
    console.error("err", err);
    res.status(400).json({
      message: "Was not able to create the game",
    });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const gameData = req.body;

    const updatedGame = await GameService.updateGame(id, gameData);

    res.status(200).json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "could not update game" });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const { id } = req.params;

    await GameService.deleteGame(id);

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal error" });
  }
};

