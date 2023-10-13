const {Connection} = require('@solana/web3.js');
const SOLANACLUSTER = 'https://api.devnet.solana.com';
const createConnection = async (req,res,next) => {
    const connection = new Connection(SOLANACLUSTER);
    res.locals.connection = connection;

    next();
}

module.exports = {createConnection};