import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic';
import CustomQuery from './components/Query';

function App() {

  return (

    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
      <CustomQuery />
      </PrismicProvider>
    </ChakraProvider>
  );
}

export default App;
