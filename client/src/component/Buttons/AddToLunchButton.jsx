import { Button, useColorMode, useToast } from '@chakra-ui/react';
import React from 'react';

const AddToLunchButton = ({ dish }) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slBlue' : 'slOrange';
  const toast = useToast();

  const handleAddToLunch = (e) => {
    e.preventDefault();
    toast({
      title: `Added ${dish.name} to Cart!`,
      position: 'top',
      isClosable: true,
      duration: 1500,
    });
    // Need to add to Cart from here
  };

  return (
    <Button
      colorScheme={colorScheme}
      maxW={'25%'}
      value={dish.name}
      onClick={(e) => handleAddToLunch(e)}
    >
      Add to Lunch
    </Button>
  );
};

export default AddToLunchButton;
