import { Tr, Td, Text } from '@chakra-ui/react'
import { CoinType } from '../model'
import { useCurrency } from '../hooks/useCurrency'

interface CoinRowProps {
    coin: CoinType
}

const CoinRow = ({coin}: CoinRowProps): JSX.Element => {
    const { name, symbol, current_price, image, market_cap_rank, market_cap, price_change_percentage_24h } = coin;
    const price24hPtc = Number(price_change_percentage_24h.toFixed(1))
    const marketCap = useCurrency(market_cap)

    return (
        <Tr>
            <Td>{market_cap_rank}</Td>
            <Td className='d-flex align-center'>
                <img className='mr-5' width='20' src={image} alt={name}/> {name}
            </Td>
            <Td>
                <Text color='grey' casing='uppercase' fontSize='xs' style={{fontWeight: 'bold'}}>{symbol}</Text>
            </Td>
            <Td isNumeric>${current_price}</Td>
            <Td isNumeric color={price24hPtc >= 0 ? 'green' : 'red'}>{price24hPtc}%</Td>
            <Td isNumeric>{marketCap}</Td>
        </Tr>
    )
}

export default CoinRow