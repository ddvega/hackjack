import React, { useState, useEffect } from 'react';
import { Button, Box } from '@material-ui/core';
import axios from 'axios';
// import { useGame } from '../store/GameProvider';
import { useUser } from '../store/UserProvider';
import { useStyles } from '../styles/useStyles';
import { Settings } from '../components/Settings';

export const GamePlay = () => {
  const classes = useStyles();
  // const { gameID } = useGame();
  // const { gameID } = useUser();
  const [gameID, setGameID] = useState();
  const [dealerHand, setDealerHand] = useState([]);
  // const [player1Hand, setPlayer1Hand] = useState(0);
  // const [player2Hand, setPlayer2Hand] = useState(0);
  // const [gameID, setGameID] = useState(null);
  const [dealt, setDealt] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(true);

  const deal = async () => {
    // setDealt(false);
    try {
      // deck id needs to be retrieved from session not hard coded
      console.log(gameID);
      const cards = await axios.get(`http://localhost:5000/deck/${gameID}/draw/?count=2`);
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

  useEffect(() => {
    console.log(gameID);
  }, [gameID]);

  return (
    <div className={classes.paper2}>
      {settingsMenu && <Settings setGameID={setGameID} setSettingsMenu={setSettingsMenu} />}

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
