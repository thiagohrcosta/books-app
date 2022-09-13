import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic';
import CustomQuery from './components/Query';
import BookContextProvider from './contexts/BookContext';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <BookContextProvider>
          <h1>Home(GALO)</h1>
          <CustomQuery />
        </BookContextProvider>
      </PrismicProvider>
    </ChakraProvider>
  );
}

export default App;
