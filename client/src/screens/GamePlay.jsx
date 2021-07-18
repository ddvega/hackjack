import React, { useState, useEffect } from 'react';
import { Button, Box } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from '../styles/useStyles';

export const GamePlay = () => {
  const classes = useStyles();
  const [dealerHand, setDealerHand] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState(0);
  const [player2Hand, setPlayer2Hand] = useState(0);
  const [dealt, setDealt] = useState(false);

  const deal = async () => {
    setDealt(false);
    try {
      // deck id needs to be retrieved from session not hard coded
      const cards = await axios.get('http://localhost:5000/deck/s6oqjq7c8t7q/draw/?count=2');
      setDealerHand(cards.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dealerHand === undefined || dealerHand.length !== 0) {
      setDealt(true);
      console.log(dealerHand);
    }
  }, [dealerHand]);

  return (
    <div className={classes.paper2}>
      {!dealt ? null : (
        <>
          <Box display="flex" flexDirection="row" alignContent="center" alignItems="center" justify="center">
            <Box>
              <img height="200px" width="100px" alt="" src={dealerHand.cards[0].image} />
              <img height="200px" width="100px" alt="" src={dealerHand.cards[1].image} />
            </Box>
          </Box>
        </>
      )}

      <Button variant="contained" color="primary" onClick={deal}>
        Deal
      </Button>
    </div>
  );
};
