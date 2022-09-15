import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic';
import BookContextProvider from './contexts/BookContext';
import { RoutesPath } from './routes';
import Navbar from './components/Navbar';
import DarkModeContextProvider from './contexts/DarkModeContext';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <DarkModeContextProvider>
          <BookContextProvider>
            <Navbar />
            <RoutesPath>
            </RoutesPath>
          </BookContextProvider>
        </DarkModeContextProvider>
      </PrismicProvider>
    </ChakraProvider>
  );
}

export default App;
