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

const connect = async (req, res, next) => {
    const secretKey = Uint8Array.from(req.body.phrase);

    const keypair = Keypair.fromSecretKey(secretKey);

    return keypair;
}

module.exports = {transfer, connect}