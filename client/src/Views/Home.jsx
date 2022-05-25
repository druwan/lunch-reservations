import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import ContentGrid from '../component/ContentGrid/ContentGrid';

const Home = () => {
  return (
    <Container maxW={'container.xl'} centerContent>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >
        <ContentGrid />
      </Flex>
    </Container>
  );
};

export default Home;
