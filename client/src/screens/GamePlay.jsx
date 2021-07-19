import React, { useState, useEffect } from 'react';
import { Button, Box, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from '../styles/useStyles';
import { Settings } from '../components/Settings';

export const GamePlay = () => {
  const classes = useStyles();
  const [gameID, setGameID] = useState();
  const [dealerHand, setDealerHand] = useState([]);
  const [dealt, setDealt] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(true);

  const deal = async () => {
    // setDealt(false);
    try {
      console.log(gameID);
      const cards = await axios.get(`http://localhost:5000/deck/${gameID}/draw/?count=2`);
      setDealerHand(cards.data);
      setShowButton(1);
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

<<<<<<< HEAD
  const buttonLoad = () => {
    if (showButton) {
      return (<Button variant="contained" color="primary" onClick={deal}>Deal</Button>);
    }
    return <CircularProgress />;
  };
=======
  useEffect(() => {
    console.log(gameID);
  }, [gameID]);
>>>>>>> 204cdc89ca075a080a9fc672267e8ec404acb68e

  return (
    <div className={classes.paper2}>
      {settingsMenu && <Settings setGameID={setGameID} setSettingsMenu={setSettingsMenu} />}

      {!dealt ? null : (
        <>
          <Box display="flex" flexDirection="row" alignContent="center" alignItems="center" justify="center">
            <Box>
              <img alt="" src={dealerHand.cards[0].image} />
              <img alt="" src={dealerHand.cards[1].image} />
            </Box>
          </Box>
        </>
      )}
      {buttonLoad()}
    </div>
  );
};
