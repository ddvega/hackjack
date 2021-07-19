/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Container,
  CssBaseline,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import { useStyles } from '../styles/useStyles';

export const Settings = (props) => {
  const [count, setCount] = useState(null);
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange2 = (event) => {
    setCount(event.target.value);
    console.log(`local_count=${count}`);
  };

  const newGame = async () => {
    console.log(count);
    const newID = await axios.get(`http://localhost:5000/deck/new/?deck_count=${count}`);
    console.log(newID.data);
    props.setGameID(newID.data.deck_id);
    props.setShowButton(true);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Settings
          </h3>
          <br />
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={state.checkedA} onChange={handleChange} color="primary" />}
              label="Dealer hits on soft 17"
              name="checkedA"
              labelPlacement="top"
            />

            <FormControlLabel
              control={<Switch checked={state.checkedB} onChange={handleChange} color="primary" />}
              label="Can Double After Split"
              name="checkedB"
              labelPlacement="top"
            />

            <FormControlLabel
              control={<Switch checked={state.checkedC} onChange={handleChange} color="primary" />}
              label="Resplitting Aces"
              name="checkedC"
              labelPlacement="top"
            />

            <FormControlLabel
              control={<Switch checked={state.checkedD} onChange={handleChange} color="primary" />}
              label="Doubling available"
              name="checkedD"
              labelPlacement="top"
            />

            <FormControlLabel
              control={
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={count}
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              }
              label="Number of Decks"
              labelPlacement="top"
            />
          </FormGroup>
          <br />

          <Button onClick={newGame} variant="contained" color="primary">
            Start Training
          </Button>
        </div>
      </Container>
    </>
  );
};
