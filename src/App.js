import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Layout from './components/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Layout>
          <Box bg={'blue.100'} w="full" h="full">
            this will be my child
          </Box>
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
