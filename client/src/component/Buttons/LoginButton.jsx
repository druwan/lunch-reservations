import { Button, useColorMode } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LoginButton = () => {
  const { colorMode } = useColorMode();
  const { loginWithRedirect } = useAuth0();
  const colorScheme = colorMode === 'light' ? 'facebook' : 'yellow';

  return (
    <Button colorScheme={colorScheme} onClick={loginWithRedirect}>
      Login
    </Button>
  );
};

export default LoginButton;
