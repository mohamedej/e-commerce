import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" w="full" h="100vh">
      <Nav />
      <Box flex="1" py={2}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
