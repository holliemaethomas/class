'use strict';

import express from 'express';
import notFound from './404.js';
import errorHandler from './error.js';
import logger from './logger.js';

const BADADDRESS=673;

let app = express();


let dumbMW = (req,res,next) => {
  console.log('this is dumb');
  next();
};

let badMW = (req,res,next) => {
  next('This is really bad');
};

app.use(logger);
app.use(dumbMW);

app.get('/', (req,res,next) => {
  console.log('In /');
  next(BADADDRESS);
  res.status(200);
  res.send('All Good');
});

app.get('/a', badMW, (req,res) => {
  console.log('In /a');
});



app.use(errorHandler);
app.use('*', notFound);


app.listen(3000);
