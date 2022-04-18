import { useReducer } from 'react'
import { CoinsContext } from './CoinsContext'
import { CoinsReducer } from './CoinsReducer'
import { CoinsActionType } from './types'

const CoinsState = (props: any) => {
    const initialValue = {
        coins: []
    }

    const [state, dispatch] = useReducer(CoinsReducer, initialValue)

    const getCoins = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const data = await res.json()

        dispatch({type: CoinsActionType.GET, payload: data})
    }

    return (
        <CoinsContext.Provider value={{
            coins: state.coins,
            getCoins
        }}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export default CoinsState