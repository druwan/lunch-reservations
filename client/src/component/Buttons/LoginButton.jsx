import { Button, useColorMode } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { colorMode } = useColorMode();
  const { loginWithRedirect } = useAuth0();

  //  Switch on colormode
  if (colorMode === 'light') {
    return (
      <Button colorScheme={'facebook'} onClick={loginWithRedirect}>
        Login
      </Button>
    );
  }
  return (
    <Button colorScheme={'yellow'} onClick={loginWithRedirect}>
      Login
    </Button>
  );
};

export default LoginButton;
