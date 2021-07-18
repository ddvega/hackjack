import React, { useState } from 'react';
import { Button, TextField, Card } from '@material-ui/core';

export const Chips = () => {
  // generates auto-incremented id for players
  const [num, setNum] = useState(0);

  // starting total for players
  const [amt, setAmt] = useState(100);

  // bank object keeps track of total and bets made
  const [bank, setBank] = useState([]);

  // Sets the number of players and creates player object in state
  const setPlayers = (total) => {
    setBank([...bank, { id: num, total, onTable: 0 }]);
    setNum(num + 1);
  };

  // Alert Player Bet > Total
  const noBet = (total, amount) => {
    if (total < amount) {
      alert('bet cannot be greater than your bank total...');
      return true;
    }
    return false;
  };

  // Deduct from player's bank
  const bet = (index, amount) => {
    if (noBet(bank[index].total, amount)) {
      return;
    }
    const temp = JSON.parse(JSON.stringify(bank));
    temp[index].onTable += amount;
    temp[index].total -= amount;
    setBank(temp);
  };

  // Add to player's bank
  const win = (index, blackJack) => {
    const temp = JSON.parse(JSON.stringify(bank));
    if (blackJack) {
      temp[index].total += (bank[index].onTable * (3 / 2));
    }
    if (!blackJack) {
      temp[index].total += (bank[index].onTable * 2);
    }
    temp[index].onTable = 0;
    setBank(temp);
  };

  // Lose all bets made on table
  const lose = (index) => {
    const temp = JSON.parse(JSON.stringify(bank));
    temp[index].onTable = 0;
    setBank(temp);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => { setPlayers(amt); }}>Create Player</Button>
      {bank.map((user) => (
        <>
          <div>Player ID: {user.id} <br />Player Bank: {user.total} <br />Bets: {user.onTable}</div>
          {/* test betting buttons */}
          <Button onClick={() => { bet(user.id, 1); }}>bet 1</Button>
          <Button onClick={() => { bet(user.id, 5); }}>bet 5</Button>
          <Button onClick={() => { bet(user.id, 10); }}>bet 10</Button>
          <Button onClick={() => { bet(user.id, 25); }}>bet 25</Button>
          <Button onClick={() => { bet(user.id, 100); }}>bet 100</Button>
          <br />
          {/* test win will add money to player's total */}
          <Button variant="contained" color="primary" onClick={() => { win(user.id, false); }}>win</Button>
          {/* test BJ win will add money to player's total */}
          <Button variant="contained" color="primary" onClick={() => { win(user.id, true); }}>win BlackJack</Button>
          {/* test lose will remove money from table */}
          <Button variant="contained" color="primary" onClick={() => { lose(user.id); }}>lose</Button>
        </>
      ))}
    </>
  );
};
