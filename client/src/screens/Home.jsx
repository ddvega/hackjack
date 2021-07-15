import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { Profile } from '../components/Profile';
import { useStyles } from '../styles/useStyles';
import { LoginButton } from '../components/Login';

export const Home = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <br />
          {isAuthenticated ? (
            <Button variant="contained" color="primary" href="/settings">
              Start Training
            </Button>
          ) : (
            <LoginButton />
          )}
          <Profile />
        </div>
      </Container>
    </>
  );
};
