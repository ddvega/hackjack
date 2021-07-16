import express from 'express';
import { getUser, addUser } from './controller';

export const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const user = req.query;

  try {
    const userList = await getUser(user);
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).json({ error: 'something went wrong retreving users from db.' });
  }
});

userRouter.post('/', async (req, res) => {
  const user = req.body;

  try {
    await addUser(user);
    res.status(200).send('added user.');
  } catch (error) {
    res.status(500).json({ error: 'something went wrong adding user to db.' });
  }
});
