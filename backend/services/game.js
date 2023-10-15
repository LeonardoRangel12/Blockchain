const Game = require("../models/game");

exports.getGames = async () => {
  let games = await Game.find().lean().exec();
  return games;
};

exports.getGameById = async (id) => {
  let game = await Game.findById(id).lean().exec();
  return game;
};

exports.createGame = async (requestBody) => {
  const game = new Game({
    name: requestBody.name,
    // developer: requestBody.developer,
    price: requestBody.price,
    description: requestBody.description,
    imageUrl: requestBody.imageUrl,
    fileUrl: requestBody.fileUrl,
    // categories: requestBody.categories,
  });
  return await game.save();
};

exports.updateGame = async (id, gameData) => {
  return await Game.findByIdAndUpdate(id, gameData, {
    new: true,
  })
    .lean()
    .exec();
};

exports.deleteGame = async (id) => {
  await Game.findByIdAndDelete(id).exec();
};