import {
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ContentGrid = () => {
  return (
    <Container maxW={'container.md'} as='main' alignItems={'flex-start'}>
      <SimpleGrid columns={2} spacing={10} shadow={'outline'}>
        {/* forEach MenuItem... MenuItems.map(dish => (dish.Image, dish.description))) */}
        <Flex>
          <Image
            src={`https://api.lorem.space/image/pizza?w=1920&h=1080`}
            alt='placeholder Image'
            objectFit={'fill'}
            rounded={'50px'}
          />
        </Flex>
        <Stack>
          <Heading as={'h2'} size={'md'} letterSpacing={'tight'}>
            Menu Title
          </Heading>
          <Text as={'p'} letterSpacing={'tight'}>
            Menu Description with a list of ingredients and price, maybe even
            add some button for Add To Order
          </Text>
        </Stack>
        {/* <Box>
          <Text>
            Menu Description with a list of ingredients and price, maybe even
            add some button for Add To Order
          </Text>
        </Box>
        <Box>
          <Image
            src={`https://api.lorem.space/image/furniture?w=1920&h=1080`}
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
            Menu Description with a list of ingredients and price, maybe even
            add some button for Add To Order
          </Text>
        </Box>
        <Box>
          <Text>
            Menu Description with a list of ingredients and price, maybe even
            add some button for Add To Order
          </Text>
        </Box>
        <Box>
          <Image
            src={`https://api.lorem.space/image/drink?w=1920&h=1080`}
            alt='placeholder Image'
            objectFit={'fill'}
            rounded={'50px'}
          />
        </Box> */}
      </SimpleGrid>
    </Container>
  );
};

export default ContentGrid;
