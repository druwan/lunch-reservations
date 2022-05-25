import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const ContentGrid = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {/* forEach MenuItem... MenuItems.map(dish => (dish.Image, dish.description))) */}
      <Box>
        <Image
          src={`https://api.lorem.space/image/pizza?w=1920&h=1080`}
          alt='placeholder Image'
          objectFit={'fill'}
          rounded={'50px'}
        />
      </Box>
      <Box>
        <Text>
          Menu Description with a list of ingredients and price, maybe even add
          some button for Add To Order
        </Text>
      </Box>
      <Box>
        <Text>
          Menu Description with a list of ingredients and price, maybe even add
          some button for Add To Order
        </Text>
      </Box>
      <Box>
        <Image
          src={`https://api.lorem.space/image/pizza?w=1920&h=1080`}
          alt='placeholder Image'
          objectFit={'fill'}
          rounded={'50px'}
        />
      </Box>
      <Box>
        <Image
          src={`https://api.lorem.space/image/burger?w=1920&h=1080`}
          alt='placeholder Image'
          objectFit={'fill'}
          rounded={'50px'}
        />
      </Box>
      <Box>
        <Text>
          Menu Description with a list of ingredients and price, maybe even add
          some button for Add To Order
        </Text>
      </Box>
      <Box>
        <Text>
          Menu Description with a list of ingredients and price, maybe even add
          some button for Add To Order
        </Text>
      </Box>
      <Box>
        <Image
          src={`https://api.lorem.space/image/drink?w=1920&h=1080`}
          alt='placeholder Image'
          objectFit={'fill'}
          rounded={'50px'}
        />
      </Box>
    </SimpleGrid>
  );
};

export default ContentGrid;
