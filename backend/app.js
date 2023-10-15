var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var walletRouter = require('./routes/wallet');
var ipfsRouter = require('./routes/ipfs');
var authRouter = require('./routes/auth');
var gameRouter = require('./routes/game');
const Moralis = require("moralis").default;
const port = 3001;

var app = express();
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const startMoralis = async() => {
    const moralisApi = "Oho7YI5eB5hce2jo3YqNBl9r6V0DFM4GEqFKDJCz8e19D6nXVm9d7tV2S2gBPiHW";
    await Moralis.start({
        apiKey : moralisApi,
    })

}
startMoralis();

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/game", gameRouter);
app.use('/user', usersRouter);
app.use('/wallet', walletRouter);
app.use("/ipfs", ipfsRouter);
module.exports = app;
