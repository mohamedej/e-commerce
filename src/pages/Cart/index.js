import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useCartContext } from '../../context/cart';
import Product from './Product';
export default function Cart() {
  const { cart, totalPrice } = useCartContext();

  return (
    <Box className="conatainer">
      <Text size={24} my={2} fontWeight="bold">
        Shopping Cart
      </Text>
      <Flex w="full" justifyContent="space-between" p={4}>
        <Flex
          flex="1"
          justifyContent="center"
          flexDirection="column"
          shadow="lg"
          p={2}
        >
          <Text fontWeight="bold" fontSize="x-large">
            Cart Items
          </Text>
          <Divider my={1} />
          {cart.lengty === 0 ? (
            <Text>Cart is Empty</Text>
          ) : (
            cart.map((product, index) => (
              <Product product={product} index={index} />
            ))
          )}
        </Flex>

        <Box shadow="xl" ml={8} p={8}>
          <Text>Checkout Items</Text>

          <Flex flexDirection="column" h="full" justifyContent="center" p={2}>
            <Text>Total Amount: {totalPrice}$</Text>
            <Button colorScheme="orange" mt={4}>
              Proced to Checout
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
