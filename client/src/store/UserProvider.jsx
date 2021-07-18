import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const api = useAPI();
  const [picture, setPicture] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [refresh, setRefresh] = useState(null);
  const [gameID, setGameID] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setPicture(user.picture);
      setUsername(user.name);
      setEmail(user.email);
    }
  }, [isAuthenticated, refresh]);

  //   const pictureUpdate = (image) => {
  //     setPicture(image);
  //   };

  //   useEffect(() => {
  //     try {
  //       api.get(`/users/${currentUser?.uid}?random_number=${new Date().getTime()}`).then(({ data }) => {
  //         setPicture(data.picture);
  //         setUsername(data.username);
  //         setEmail(data.email);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, [api, currentUser?.uid, refresh]);

  // const value = { picture, email, username, setRefresh, pictureUpdate };
  const value = { picture, email, username, isAuthenticated, setRefresh };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
