import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const AddToLunchButton = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slBlue' : 'slOrange';

  return <Button colorScheme={colorScheme}>Add to Lunch</Button>;
};

export default AddToLunchButton;
