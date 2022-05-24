import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Btn = () => {
  const { colorMode } = useColorMode();

  //  Switch on colormode
  if (colorMode === 'light') {
    return (
      <Button colorScheme={'facebook'} onClick={() => console.log('Login')}>
        Sign Up
      </Button>
    );
  }
  return <Button colorScheme={'yellow'}>Sign Up</Button>;

  // Switch on Authenticated
};

export default Btn;
