import express from 'express';
import { userRouter } from './users/routes';
import { deckRouter } from './deck/routes';

// route of routes
export const apiRouter = express.Router();

// user needs token to pass authentication layer
apiRouter.use('/users', userRouter);
apiRouter.use('/deck', deckRouter);
