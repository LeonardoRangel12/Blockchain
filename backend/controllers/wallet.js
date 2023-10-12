const {
  Connection,
  SystemProgram,
  Transaction,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");

// Es la red a la que se conecta
const SOLANA_NETWORK = "devnet";

// Crea la cookie de la publicKey
const connect = async (req, res, next) => {
  res
    .writeHead(200, {
      "Set-Cookie": `publicKey=${req.body.publicKey}; Path=/; HttpOnly;`,
      "Access-Control-Allow-Credentials": "true",
    })
    .send();
};

// Elimina la cookie de la publicKey
const disconnect = async (req, res, next) => {
  res
    .writeHead(200, {
      "Set-Cookie": `publicKey=null; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; HttpOnly;`,
      "Access-Control-Allow-Credentials": "true",
    })
    .send();
};

// Checa si existe la cookie de la publicKey
const login = async (req, res, next) => {
  if (req.cookies.publicKey) res.send(req.cookies.publicKey);
  else res.send(false);
};

const checkBalance = async (req, res, next) => {
  try {
    const connection = res.locals.connection;
    const balance = await connection.getBalance(
      new PublicKey(req.cookies.publicKey)
    );
    const balanceNew = balance / LAMPORTS_PER_SOL;
    res.send(balanceNew.toString());
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { connect, disconnect, login, checkBalance };
