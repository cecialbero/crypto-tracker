import { useContext } from 'react'
import { Table, Tbody, Thead, Tr, Th, TableContainer, Heading } from '@chakra-ui/react'
import { CoinsContext } from '../context/CoinsContext'
import CoinRow from './CoinRow'

const CryptoTable = () => {
    const coinsContext = useContext(CoinsContext);
    const { coins } = coinsContext;

    return (
        <>
            <Heading></Heading>
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Coin</Th>
                            <Th></Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>Mkt Cap</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map((coin, index) => <CoinRow coin={coin} key={index}/>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CryptoTable