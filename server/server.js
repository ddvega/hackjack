import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import { apiRouter } from './api';
import { connectDB } from './db';

// enable environment variables to be used in development mode
// allow values to be passed from .env file
// any variable that starts will process.env will be accessing .env
dotenv.config();

// connect to mongoDB database.  Uses /database/db.js
connectDB();

// create server
const app = express();

// middleware
app.use(logger('dev'));
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', apiRouter);

app.get('*', (req, res) => {
  res.send('hackjack');
});

// port will change in production mode
const port = process.env.PORT || 8080;

// start server
app.listen(port, () => {
  console.log(`${process.env.APP_NAME} listening on port ${port}!`);
});
