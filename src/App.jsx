import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic';
import BookContextProvider from './contexts/BookContext';
import Books from './components/Books/Books';
import HomeBanner from './components/HomeBanner';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <BookContextProvider>
          <HomeBanner />
          <Books />
        </BookContextProvider>
      </PrismicProvider>
    </ChakraProvider>
  );
}

export default App;
