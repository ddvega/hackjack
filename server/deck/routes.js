import express from 'express';
import { initalizeDeck, drawCard } from './controller';

export const deckRouter = express.Router();

deckRouter.get('/new', async (req, res) => {
  // http://localhost:5000/deck/new/?deck_count=6
  try {
    const deck = await initalizeDeck(req.query);
    res.status(200).send(deck);
  } catch (error) {
    res.status(500).json({ error: 'something went wrong.' });
  }
});

deckRouter.get('/:deck_id/draw', async (req, res) => {
  // http://localhost:5000/deck/wv99tptrav1n/draw/?count=2
  try {
    const deck = await drawCard(req.params.deck_id, req.query);
    res.status(200).send(deck);
  } catch (error) {
    res.status(500).json({ error: 'something went wrong.' });
  }
});
