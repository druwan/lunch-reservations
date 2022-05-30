import { Button, useColorMode } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const LogoutButton = () => {
  const { colorMode } = useColorMode();
  const { logout } = useAuth0();

  //  Switch on colormode
  if (colorMode === 'light') {
    return (
      <Button
        colorScheme={'facebook'}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    );
  }
  return (
    <Button
      colorScheme={'yellow'}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
