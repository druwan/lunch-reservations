import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import React from 'react';
import Btn from '../Button/Btn';
import ToggleTheme from '../Theme/ToggleTheme';

const Logobox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  const lunchPrintImg = ``; // ${useColorModeValue('', '-dark')}.png
  return (
    <a href='/'>
      <Logobox>
        <Image src={lunchPrintImg} objectFit={'cover'} alt='LogoType' />
        <Text
          color={useColorModeValue('gray.800', 'slColor.slYellow')}
          fontSize='20'
          ml={3}
        >
          Lunch Reservations මමපඞ
        </Text>
      </Logobox>
    </a>
  );
};

const Navbar = () => {
  return (
    <Box position='static' as='nav' w='100%' wrap='wrap'>
      <Container
        display='flex'
        p={4}
        maxW='container.xl'
        wrap='wrap'
        alignItems='center'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
        <Box flex={1} align='right'>
          <Btn />
          <ToggleTheme />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
