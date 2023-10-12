var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var walletRouter = require('./routes/wallet');
var ipfsRouter = require('./routes/ipfs');
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

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/wallet', walletRouter);
app.use("/ipfs", ipfsRouter);
module.exports = app;
