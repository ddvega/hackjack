import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { UserProvider } from './store/UserProvider';

import { Home } from './screens/Home';
import { Users } from './screens/Users';
import { Navbar } from './components/Navbar';
import { theme } from './styles/theme';
import { Account } from './screens/Account';
import { Settings } from './components/Settings';
import { GamePlay } from './screens/GamePlay';

export const Router = () => {
  return (
    <BrowserRouter>
      <>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/account" component={Account} />
              <Route path="/settings" component={Settings} />
              <Route path="/gameplay" component={GamePlay} />
            </Switch>
          </ThemeProvider>
        </UserProvider>
      </>
    </BrowserRouter>
  );
};
