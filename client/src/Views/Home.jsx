import { Container, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ContentGrid from '../component/ContentGrid/ContentGrid';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Home = ({ cart, setCart }) => {
  const [dishes, setDishes] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const getDishes = async () => {
      const response = await fetch('http://localhost:3001/api/dishes');
      const data = await response.json();
      setDishes(data);
    };
    getDishes();
  }, []);

  // create user
  useEffect(() => {
    if (isAuthenticated) {
      const createCustomer = async () => {
        try {
          await axios({
            method: 'POST',
            url: process.env.REACT_APP_SERVER_URL + '/api/customers',
            data: {
              name: user.nickname,
              email: user.email,
            },
          });
        } catch (error) {
          // Already exists? just continue
          console.log(error.response.data.message);
        }
      };
      createCustomer();
    }
  }, [isAuthenticated, user]);

  return (
    <Container maxW={'container.xl'} centerContent>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        position={'relative'}
      >
        <ContentGrid dishes={dishes} cart={cart} setCart={setCart} />
      </Flex>
    </Container>
  );
};

export default Home;
