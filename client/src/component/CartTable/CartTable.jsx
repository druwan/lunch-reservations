import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

const CartTable = ({ cart }) => {
  return (
    <TableContainer>
      <Table variant={'simple'} size='sm'>
        <TableCaption>Lunch Order</TableCaption>
        <Thead>
          <Tr>
            <Th>Dish</Th>
            <Th>Orders</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.map((dish) => (
            <Tr key={dish._id}>
              <Td key={dish.name}>{dish.name}</Td>
              <Td>#</Td>
              <Td key={dish.price}>{dish.price} SEK</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th>Total:</Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
