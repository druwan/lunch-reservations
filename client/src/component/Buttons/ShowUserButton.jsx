import { useAuth0 } from '@auth0/auth0-react';
import { StarIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ShowUserButton = () => {
  const { user } = useAuth0();
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slRed' : 'slOrange';

  return (
    <Button
      variant={'ghost'}
      colorScheme={colorScheme}
      leftIcon={<StarIcon />}
      isDisabled={true}
    >
      {user.email}
    </Button>
  );
};

export default ShowUserButton;
