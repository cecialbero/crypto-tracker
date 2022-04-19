import { Tr, Td} from '@chakra-ui/react'
import { CoinType } from '../model'
import { currencyFormat } from '../helpers/currencyFormat'

interface CoinRowProps {
    coin: CoinType
}

const CoinRow = ({coin}: CoinRowProps): JSX.Element => {
    const { name, symbol, current_price, image, market_cap_rank, market_cap } = coin;

    return (
        <Tr>
            <Td>{market_cap_rank}</Td>
            <Td className='d-flex align-center'><img className='mr-5' width='20' src={image} alt={name}/> {name}</Td>
            <Td>{symbol}</Td>
            <Td isNumeric>${current_price}</Td>
            <Td isNumeric>{currencyFormat(market_cap)}</Td>
            <Td>25.4</Td>
        </Tr>
    )
}

export default CoinRow