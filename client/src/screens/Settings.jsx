import React, { useState } from 'react';
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
import { useStyles } from '../styles/useStyles';

export const Settings = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });
  const [age, setAge] = useState('');

  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange2 = (event) => {
    setAge(event.target.value);
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
                  value={age}
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              }
              label="Number of Decks"
              labelPlacement="top"
            />
          </FormGroup>
          <br />

          <Button variant="contained" color="primary" href="/gameplay">
            Start Training
          </Button>
        </div>
      </Container>
    </>
  );
};
