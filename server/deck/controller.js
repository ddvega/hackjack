/* eslint-disable camelcase */
import axios from 'axios';

export const initalizeDeck = async (query) => {
  const { deck_count } = query;
  const deck = await axios.get(
    `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deck_count}`,
  );
  return deck.data;
};

export const drawCard = async (deck_id, query) => {
  const { count } = query;
  const deck = await axios.get(
    `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`,
  );
  return deck.data;
};
