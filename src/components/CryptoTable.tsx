import { useContext } from 'react'
import { Table, Tbody, Thead, Tr, Th, TableContainer } from '@chakra-ui/react'
import { CoinsContext } from '../context/CoinsContext'
import CoinRow from './CoinRow'

const CryptoTable = () => {
    const coinsContext = useContext(CoinsContext);
    const { coins, loading, error } = coinsContext;

    if(error) {
        return <p>No data</p>
    }

    return (
        <>
            {
                loading
                ? <p>Loading...</p> 
                : <TableContainer>
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
            }
        </>
    )
}

export default CryptoTable