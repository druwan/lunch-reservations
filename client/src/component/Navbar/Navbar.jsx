import { useAuth0 } from '@auth0/auth0-react';
import {
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';

import React from 'react';
import CartButton from '../Buttons/CartButton';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';
import ShowUserButton from '../Buttons/ShowUserButton';
import SignUpButton from '../Buttons/SignUpButton';
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
  const lunchPrintImg = `/images/Karapincha.png`; // ${useColorModeValue('', '-dark')}.png
  return (
    <Logobox>
      <Image src={lunchPrintImg} w={'10%'} alt='LogoType' />
      <Text
        color={useColorModeValue('slBlue.800', 'slOrange.500')}
        fontSize='20'
        ml={3}
      >
        වෙලාව මදි
        {/* Lunch Reservations */}
      </Text>
    </Logobox>
  );
};

const Navbar = ({ cart }) => {
  const { isAuthenticated } = useAuth0();
  const { colorMode } = useColorMode();

  return (
    <Flex
      as='header'
      top={0}
      w='full'
      position='sticky'
      zIndex={1}
      display='block'
      color
      bg={colorMode === 'light' ? 'slOrange.200' : 'slBlue.900'}
    >
      <Container
        as='nav'
        display='flex'
        p={4}
        width='full'
        maxW='container.xl'
        wrap='wrap'
        justifyContent={'center'}
        alignItems='center'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
        <Spacer />
        <ButtonGroup gap={2}>
          {!isAuthenticated ? <SignUpButton /> : <ShowUserButton />}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <CartButton cart={cart} />
          <ToggleTheme />
        </ButtonGroup>
      </Container>
    </Flex>
  );
};

export default Navbar;
