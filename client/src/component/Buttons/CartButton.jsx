import {
  Badge,
  Button,
  ButtonGroup,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import React from 'react';
import CartTable from '../CartTable/CartTable';

const CartButton = ({ cart, setCart }) => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'slBlue' : 'slOrange';
  const invertColorScheme = colorMode === 'light' ? 'slOrange' : 'slRed';

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Button colorScheme={colorScheme} onClick={onOpen}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartTable cart={cart} setCart={setCart} />
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button colorScheme={colorScheme}>Pay</Button>
              <Button colorScheme={colorScheme} onClick={() => setCart([])}>
                Clear Cart
              </Button>
              <Button colorScheme={invertColorScheme} onClick={onClose}>
                Close
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Icon as={FaShoppingCart} w={6} h={6} />
      <Text>
        <Badge
          variant={'solid'}
          position={'relative'}
          right={'-2'}
          colorScheme={invertColorScheme}
          fontSize={'xl'}
          fontWeight={'bold'}
          borderRadius={'lg'}
        >
          {cart.length}
        </Badge>
      </Text>
    </Button>
  );
};

export default CartButton;
