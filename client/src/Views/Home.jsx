import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import ContentGrid from '../component/ContentGrid/ContentGrid';

const Home = () => {
  return (
    <Container maxW={'container.xl'} centerContent>
      <Flex
        height={'100vh'}
        alignItems='center'
        justifyContent={'space-around'}
      >
        <ContentGrid />
      </Flex>
    </Container>
  );
};

export default Home;
