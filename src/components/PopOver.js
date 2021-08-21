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
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

export default function PopOver() {
  return (
    <Popover placement="auto">
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
              1
            </Text>
          </Flex>
        </Box>
      </PopoverTrigger>
      <PopoverContent fontSize="sm" w={56}>
        <PopoverHeader fontWeight="semibold">Shopping Cart</PopoverHeader>
        <PopoverBody>
          <Flex alignItems="center">
            <Image
              w="18"
              h="24"
              src="https://i01.appmifile.com/webfile/globalimg/yawen/POCO-F3-800/K11Abaisezhengmian800.png"
            />
            <Box>
              <Text>Samsung S20</Text>
              <Text>1200$</Text>
            </Box>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Link
            as={RouterLink}
            to="/cart"
            fontWeight="semibold"
            _hover={{ color: 'gray' }}
            _focus={{ boxShadow: 'none' }}
          >
            Open Cart
          </Link>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
