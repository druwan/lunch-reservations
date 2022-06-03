import { Badge, Button, Icon, Text, useColorMode } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import React from 'react';

const CartButton = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slBlue' : 'slOrange';
  const invertColorScheme = colorMode === 'light' ? 'slOrange' : 'slRed';

  return (
    <Button colorScheme={colorScheme} onClick={() => console.log('clicked')}>
      <Icon as={FaShoppingCart} w={6} h={6} />
      <Text>
        <Badge
          variant={'solid'}
          position={'relative'}
          right={'-2'}
          colorScheme={invertColorScheme}
          fontSize={'xl'}
          fontWeight={'bold'}
          borderRadius={'lg'}
        >
          2
        </Badge>
      </Text>
    </Button>
  );
};

export default CartButton;
