const { Connection, clusterApiUrl } = require("@solana/web3.js");
const SOLANA_NETWORK = "devnet";

const createConnection = async (req, res, next) => {
  const connection = new Connection(clusterApiUrl(SOLANA_NETWORK));
  res.locals.connection = connection;
  next();
};

module.exports = { createConnection };
