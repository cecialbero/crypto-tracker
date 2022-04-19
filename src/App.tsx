import { ChakraProvider, theme, Container, Heading } from '@chakra-ui/react';
import CryptoTable from './components/CryptoTable';
import Search from './components/Search';

import './App.scss';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW='900px'>
      <Heading as='h1' size='lg'>Top 10 Cryptocurrency Prices by Market Cap</Heading>
      <Search />
      <CryptoTable />
    </Container>
  </ChakraProvider>
)
