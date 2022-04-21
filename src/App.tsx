import { useContext } from 'react'
import { ChakraProvider, theme, Container, Heading, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import CryptoTable from './components/CryptoTable'
import Search from './components/Search'
import Pagination from './components/Pagination'
import { CoinsContext } from './context/CoinsContext'

import './App.scss';

export const App = () => {
  const coinsContext = useContext(CoinsContext)
  const { error } = coinsContext;

  return (
    <ChakraProvider theme={theme}>
      <Container maxW='1000px' marginTop={50} marginBottom={50}>
        <Heading as='h1' size='lg' marginBottom={30}>Top 10 Cryptocurrency Prices by Market Cap</Heading>
        {
          error
          ? <Alert status='error' marginTop={30}>
                <AlertIcon />
                <AlertTitle mr={2}>Ups, looks like there's no data available</AlertTitle>
                <AlertDescription>We are working on a solution, try again later</AlertDescription>
            </Alert>
          : <>
              <Search />
              <CryptoTable />
              <Pagination />
            </>
        }
      </Container>
    </ChakraProvider>
  )
}
