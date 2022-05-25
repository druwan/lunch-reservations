import { Flex, Grid, Heading } from '@chakra-ui/react';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    return (
      <Flex height={'100vh'} alignItems='center' justifyContent='center'>
        <Heading>Welcome {user.given_name} </Heading>
      </Flex>
    );
  }

  return (
    <Flex height={'100vh'} alignItems='center' justifyContent={'center'}>
      <Grid>Menu</Grid>
    </Flex>
  );
};

export default Home;
