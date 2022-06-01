import { Container, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ContentGrid from '../component/ContentGrid/ContentGrid';

const Home = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      const response = await fetch('http://localhost:3001/api/dishes');
      const data = await response.json();
      setDishes(data);
    };
    getDishes();
  }, []);

  return (
    <Container maxW={'container.xl'} centerContent>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >
        <ContentGrid dishes={dishes} />
      </Flex>
    </Container>
  );
};

export default Home;
