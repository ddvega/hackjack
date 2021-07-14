import React from 'react';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { Profile } from '../components/Profile';
import { useStyles } from '../styles/useStyles';

export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Button variant="contained" color="primary" href="/users">
            Start Training
          </Button>
          <Profile />
        </div>
      </Container>
    </>
  );
};
