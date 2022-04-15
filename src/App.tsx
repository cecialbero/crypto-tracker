import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import CryptoTable from './components/CryptoTable';
import Search from './components/Search';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW='900px'>
      <Search />
      <CryptoTable />
    </Container>
  </ChakraProvider>
)
