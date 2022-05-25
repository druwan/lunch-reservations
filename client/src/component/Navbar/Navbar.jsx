import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import React from 'react';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';
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
          වෙලාව මදි
          {/* Lunch Reservations */}
        </Text>
      </Logobox>
    </a>
  );
};

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
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
        <Spacer />
        <ButtonGroup gap={2}>
          {/* Somehow overwrites the auth0 session */}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <ToggleTheme />
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Navbar;
