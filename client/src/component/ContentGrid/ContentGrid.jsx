import {
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AddToLunchButton from '../Buttons/AddToLunchButton';

const ContentCard = ({ dish }) => {
  return (
    <>
      <Flex>
        <Image
          src={`${dish.image}`}
          alt={`image of ${dish.model}`}
          objectFit={'fill'}
          rounded={'50px'}
          maxH={'container.sm'}
        />
      </Flex>
      <Stack maxW={'container.sm'}>
        <Heading as={'h2'} size={'md'} letterSpacing={'tight'}>
          {dish.isVegan ? `${dish.name} (Vegan)` : `${dish.name}`}
        </Heading>
        <Text as={'p'} letterSpacing={'tight'}>
          {dish.spicy > 0 ? `Spicyness ${dish.spicy}` : ''}
          <br />
          {`${dish.description}`}
        </Text>
        <Spacer />
        <AddToLunchButton />
      </Stack>
    </>
  );
};

const ContentReverseCard = ({ dish }) => {
  return (
    <>
      <Stack>
        <Heading as={'h2'} size={'md'} letterSpacing={'tight'}>
          {dish.isVegan ? `${dish.name} (Vegan)` : `${dish.name}`}
        </Heading>
        <Text as={'p'} letterSpacing={'tight'}>
          {dish.spicy > 0 ? `Spicyness ${dish.spicy}` : ''}
          <br />
          {`${dish.description}`}
        </Text>
        <Spacer />
        <AddToLunchButton />
      </Stack>
      <Flex>
        <Image
          src={`${dish.image}`}
          alt='placeholder image'
          objectFit={'fill'}
          rounded={'50px'}
        />
      </Flex>
    </>
  );
};

const ContentGrid = ({ dishes }) => {
  return (
    <Container maxW={'container.lg'} as='main'>
      <SimpleGrid columns={2} spacingX={'4'} spacingY={'20'}>
        {dishes.map((dish, index) =>
          index % 2 !== 0 ? (
            <ContentCard key={dish._id} dish={dish} />
          ) : (
            <ContentReverseCard key={dish._id} dish={dish} />
          )
        )}
      </SimpleGrid>
    </Container>
  );
};

export default ContentGrid;
