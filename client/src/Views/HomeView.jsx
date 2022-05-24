import { Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const HomeView = () => {
  const { isAuthenticated, user, error, getAccessTokenSilently } = useAuth0();

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });
        const response = await fetch(process.env.REACT_APP_API_SERVER_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setToken(await response.json());
      } catch (error) {
        console.error(error);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <Flex height={'100vh'} alignItems='center' justifyContent='center'>
      {isAuthenticated ? (
        <Heading>Welcome: {user.name} </Heading>
      ) : (
        <div>please login</div>
      )}
    </Flex>
  );
};

export default HomeView;
