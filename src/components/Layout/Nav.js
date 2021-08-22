import {
  Box,
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import PopOver from '../NavCart';
const Nav = () => {
  return (
    <Flex w="full" px={12} pt={2} alignItems="center" bg="gray.100">
      <Box flex="1">
        <InputGroup variant="flushed">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Box>
      <Stack
        direction="row"
        spacing={8}
        fontSize="md"
        fontWeight="bold"
        flex="1"
        justifyContent="center"
      >
        <Link _hover={{ color: 'gray' }} as={RouterLink} to="/">
          Products
        </Link>
        <Link _hover={{ color: 'gray' }} as={RouterLink} to="/about">
          About us
        </Link>
      </Stack>
      <Flex flex="1" justify="flex-end" position="relative">
        <PopOver />
      </Flex>
    </Flex>
  );
};

export default Nav;
