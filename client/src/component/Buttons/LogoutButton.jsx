import { Button, useColorMode } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { colorMode } = useColorMode();
  const { logout } = useAuth0();
  const colorScheme = colorMode === 'light' ? 'slRed' : 'slRed';

  return (
    <Button
      colorScheme={colorScheme}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
