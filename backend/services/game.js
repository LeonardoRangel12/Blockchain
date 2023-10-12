const Game = require("../models/game");

exports.getGames = async () => {
  let games = await Game.find().lean().exec();
  return games;
};

exports.getProductById = async (id) => {
  let product = await Product.findById(id).lean().exec();
  return product;
};

exports.createProduct = async (requestBody) => {
  const product = new Product({
    name: requestBody.name,
    imageUrl: requestBody.imageUrl,
    description: requestBody.description,
    price: requestBody.price,
  });
  return await product.save();
};

exports.updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
  })
    .lean()
    .exec();
};

exports.deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id).exec();
};