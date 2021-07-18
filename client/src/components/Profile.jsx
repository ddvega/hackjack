import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardMedia, Box } from '@material-ui/core';
import { useUser } from '../store/UserProvider';

const useStyles = () => {
  const styles = makeStyles((theme) => ({
    card: {
      maxWidth: 500,
      maxHeight: 200,
    },
    media: {
      paddingTop: '1%', // 16:9
    },
  }));

  return styles();
};
export const Profile = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const styles = useStyles();
  const { picture, username, email, isAuthenticated } = useUser();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <>
      {isAuthenticated && (
        <Container maxWidth="xs">
          <Card className={styles.card}>
            <CardMedia className={styles.media}>
              <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                alignItems="center"
                justify="center"
                m={-1}
                p={2}
              >
                <Box>
                  <img src={picture} alt="" height="100px" width="100px" />
                </Box>

                <Box ml={2}>
                  <h3>{username}</h3>
                  <h3>{email}</h3>
                </Box>
              </Box>
            </CardMedia>
          </Card>
        </Container>
      )}
    </>
  );
};
