import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillDelete } from 'react-icons/ai';
import { useCartContext } from '../context/cart';
export default function Cart() {
  const { cart, removeItem, addOneQuantity, minusOneQuantity, totalPrice } =
    useCartContext();
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
        >
          <Text fontWeight="bold" fontSize="x-large">
            Cart Items
          </Text>
          {cart.lengty === 0 ? (
            <Text>Cart is Empty</Text>
          ) : (
            cart.map(product => {
              return (
                <Flex>
                  <Image w={48} h={198} src={product.imageUrl} />
                  <Flex
                    flex="1"
                    p={6}
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    <Flex
                      justifyContent="space-between"
                      flexDirection="row"
                      w="full"
                    >
                      <Text fontWeight="bold">{product.productName}</Text>
                      <HStack>
                        <IconButton
                          icon={<AiOutlinePlus />}
                          onClick={() => {
                            addOneQuantity(product.id);
                          }}
                        />
                        <Text>{product.quantity}</Text>
                        <IconButton
                          icon={<AiOutlineMinus />}
                          isDisabled={product.quantity <= 1}
                          onClick={() => {
                            minusOneQuantity(product.id);
                          }}
                        />
                      </HStack>
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      flexDirection="row"
                      w="full"
                    >
                      <IconButton
                        color="red.600"
                        size="lg"
                        icon={<AiFillDelete />}
                        onClick={() => {
                          removeItem(product.id);
                        }}
                      />
                      <Text>Price : {product.price * product.quantity}$</Text>
                    </Flex>
                  </Flex>
                </Flex>
              );
            })
          )}
        </Flex>

        <Box shadow="xl" ml={8} p={8}>
          <Text>Checkout Items</Text>

          <Flex flexDirection="column" h="full" justifyContent="center" p={2}>
            <Text>
              Total Amount:
              {totalPrice}
            </Text>
            <Button mt={4}>Proced to Checout</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
