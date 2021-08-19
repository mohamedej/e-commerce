import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <Flex flexDirection="column" w="full" flex="1">
        <Nav />
        <Box flex="1">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
