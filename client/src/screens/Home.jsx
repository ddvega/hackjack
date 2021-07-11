import React from 'react';
import { LoginButton } from '../components/Login';
import { LogoutButton } from '../components/Logout';
import { Profile } from '../components/Profile'

export const Home = () => (
  <>
    <div>Hello Worldman</div>
    <LoginButton />
    <LogoutButton />
    <Profile />
  </>
);
