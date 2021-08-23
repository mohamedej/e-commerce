import {
  Box,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from '../context/cart';
export default function NavCart() {
  const { cart } = useCartContext();
  const initRef = React.useRef();
  return (
    <Popover placement="auto" initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Box>
              <IconButton
                _hover={{ color: 'gray' }}
                _focus={{ boxShadow: 'none' }}
                rounded="full"
                icon={<RiShoppingCart2Fill />}
              />
              <Flex
                justify="center"
                alignItems="center"
                position="absolute"
                bg="red.400"
                rounded="full"
                top="0"
                right="0"
                p={0.5}
                width="16px"
              >
                <Text fontSize="8px" color="white">
                  {cart.length}
                </Text>
              </Flex>
            </Box>
          </PopoverTrigger>
          <PopoverContent fontSize="sm" w={56}>
            <PopoverHeader fontWeight="semibold">Shopping Cart</PopoverHeader>
            <PopoverBody>
              {cart.length <= 0 ? (
                <Text>Cart is empty</Text>
              ) : (
                cart.map(product => (
                  <Flex alignItems="center" key={product.id}>
                    <Image w="18" h="24" src={product.imageUrl} />
                    <Box>
                      <Text>{product.productName}</Text>
                      <Text>{product.price}$</Text>
                      <Text>{product.quantity}</Text>
                    </Box>
                  </Flex>
                ))
              )}
            </PopoverBody>
            <PopoverFooter>
              <Button
                colorScheme="orange"
                onClick={onClose}
                as={RouterLink}
                to="/cart"
                my={1}
              >
                Open Cart
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
