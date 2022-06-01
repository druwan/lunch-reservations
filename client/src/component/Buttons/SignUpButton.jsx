import { useAuth0 } from '@auth0/auth0-react';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'facebook' : 'yellow';

  return (
    <Button
      colorScheme={colorScheme}
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
