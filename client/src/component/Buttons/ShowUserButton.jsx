import { useAuth0 } from '@auth0/auth0-react';
import { StarIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ShowUserButton = () => {
  const { user } = useAuth0();
  const { colorMode } = useColorMode();

  //  Switch on colormode
  if (colorMode === 'light') {
    return (
      <Button
        variant={'ghost'}
        colorScheme={'facebook'}
        leftIcon={<StarIcon />}
        isDisabled={true}
      >
        {user.email}
      </Button>
    );
  }
  return (
    <Button
      variant={'ghost'}
      colorScheme={'yellow'}
      leftIcon={<StarIcon />}
      isDisabled={true}
    >
      {user.email}
    </Button>
  );
};

export default ShowUserButton;
