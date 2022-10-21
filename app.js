/*
npm install express
npm install nodemon
npm install mongoose
npm install dotenv
npm install body-parser
npm install cors
*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


app.use(bodyParser.json());
//a linha acima faz com que toda a requisicao feita rode um bodyParser
app.use(cors());

//import Routes
//const postsRoute = require('./routes/posts');
const questionsRoute = require('./routes/questionResquisition');

//middlewares
//determina a rota de /posts
//app.use('/posts', postsRoute);
app.use('/questions', questionsRoute);

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('connectec to db!')
);

//how to we start listening to the server
app.listen(3001);
