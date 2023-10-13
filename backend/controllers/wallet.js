const { sendAndConfirmTransaction, clusterApiUrl, Keypair, Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL } = require("@solana/web3.js");
const axios = require("axios");

// Envía una transferencia de SOL a una cuenta
const transfer = async (req,res,next) => {
    /* Envía SOL de una cuenta a otra

        Regresa el estado
    */
    // console.log(req.cookies);
    // const keypair = req.cookies.Keypair;
    // const toKeypair = req.body.toKeypair;
    // let transaction = new Transaction();

    let fromKeypair = Keypair.generate();
    let toKeypair = Keypair.generate();
    let transaction = new Transaction();

    transaction.add(
        SystemProgram.transfer({
            fromPubkey: fromKeypair.publicKey,
            toPubkey: toKeypair.publicKey,
            lamports: LAMPORTS_PER_SOL,
        }),
    );

    let connection = new Connection(clusterApiUrl("devnet"));
    await sendAndConfirmTransaction(connection, transaction, [fromKeypair]).then((resp) => {
        console.log(resp);
    });
};

// Crea la cookie de la publicKey
const connect = async (req, res, next) => {
    res.writeHead( 200, {
        "Set-Cookie": `publicKey=${req.body.publicKey}; Path=/; HttpOnly;`,
        "Access-Control-Allow-Credentials": "true",
      }).send();

}

// Elimina la cookie de la publicKey
const disconnect = async(req,res,next) => {
    res.writeHead( 200, {
      "Set-Cookie": `publicKey=null; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; HttpOnly;`,
      "Access-Control-Allow-Credentials": "true",
    }).send();
}

// Checa si existe la cookie de la publicKey
const login = async(req,res,next) => {
    if(req.cookies.publicKey)
        res.send(req.cookies.publicKey);
    else
        res.send(false);
}

const buy = async(req,res,next) => {
    // const secret 
}

module.exports = {transfer, connect, disconnect, login}