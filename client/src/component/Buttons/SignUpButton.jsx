import { useAuth0 } from '@auth0/auth0-react';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { colorMode } = useColorMode();

  //  Switch on colormode
  if (colorMode === 'light') {
    return (
      <Button
        colorScheme={'facebook'}
        onClick={loginWithRedirect({ screen_hint: 'signup' })}
      >
        Sign Up
      </Button>
    );
  }
  return (
    <Button
      colorScheme={'yellow'}
      onClick={loginWithRedirect({ screen_hint: 'signup' })}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
