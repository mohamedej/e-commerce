import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" w="full" h="100vh">
      <Nav />
      <Image
        mb={4}
        h={270}
        fit="cover"
        src="https://cdn.vox-cdn.com/thumbor/AtXeJkcpOFIvJkkoJ9WG8hV9stk=/0x0:2040x1360/1400x933/filters:focal(877x755:1203x1081):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67732463/vpavic_200805_4131_0086_1.0.jpg"
      />
      <Box flex="1" p={2}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
