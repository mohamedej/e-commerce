import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Layout from './components/Layout';
import '@fontsource/roboto';
import { Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Default from './pages/Default';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" fontFamily="roboto">
        <Layout>
          <Box w="full" h="full">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
          </Box>
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
