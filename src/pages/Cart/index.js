import { Box, Button, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useCartContext } from '../../context/cart';
import Product from './Product';
import { Link as RouterLink } from 'react-router-dom';
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
          shadow="md"
          p={2}
          rounded="md"
        >
          <Text fontWeight="bold" fontSize="x-large">
            Cart Items
          </Text>
          <Divider my={1} />
          {cart.length <= 0 ? (
            <VStack pt={2} mt={4} spacing={4}>
              <Text fontSize="md" fontWeight="semibold">
                Your cart is empty !
              </Text>
              <Button colorScheme="orange" as={RouterLink} to="/">
                Continue shopping
              </Button>
            </VStack>
          ) : (
            cart.map((product, index) => (
              <Product product={product} index={index} />
            ))
          )}
        </Flex>
        {cart.length > 0 && (
          <Box shadow="md" ml={8} p={8} rounded="md">
            <Text>Checkout Items</Text>

            <Flex flexDirection="column" h="full" justifyContent="center" p={2}>
              <Text>Total Amount: {totalPrice}$</Text>
              <Button colorScheme="orange" mt={4}>
                Proced to Checout
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
