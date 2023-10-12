const express = require('express');
const mongoose = require('mongoose');//const routerApi = require('./routes');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = 3001;

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, // Enable credentials (cookies, etc.)
  };
  
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser());

// database connection
const dbURI = 'mongodb+srv://blockchain:X3I6IScIGR3VRSqT@blockchain.cgnhn7a.mongodb.net/blockchain';
mongoose.connect(dbURI/*, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }*/)
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));


app.use(routes);

