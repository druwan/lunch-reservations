import { Button, useColorMode, useToast } from '@chakra-ui/react';
import React from 'react';

const AddToLunchButton = ({ dish, cart, setCart }) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slBlue' : 'slOrange';
  const toast = useToast();

  const showToast = (nameOfDish) => {
    toast({
      title: `Added ${nameOfDish} to Cart!`,
      position: 'top',
      isClosable: true,
      duration: 1500,
    });
  };

  const addToCart = (selectedDish) => {
    let newCart = [...cart];
    if (newCart.includes(selectedDish)) {
      console.log('Already in -> Add 1 in quantity');
    } else {
      console.log('Add to Cart');
      newCart.push(selectedDish.name);
    }
    setCart(newCart);
  };

  const handleAddToLunch = (e) => {
    e.preventDefault();
    showToast(`${dish.name}`);
    // Need to add to Cart from here
    addToCart(dish);
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
