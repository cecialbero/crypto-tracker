import { useEffect, useReducer } from 'react'
import { CoinsContext } from './CoinsContext'
import { CoinsReducer } from './CoinsReducer'
import { CoinsActionType } from './types'

const CoinsState = (props: any) => {
    const initialValue = {
        coins: [],
        loading: true,
        error: false
    }

    const [state, dispatch] = useReducer(CoinsReducer, initialValue)

    useEffect(() => {
        getCoins(1)
    },[])

    const getCoins = async (pageNumber: number) => {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`);
            const data = await res.json()

            dispatch({type: CoinsActionType.GET, payload: data})

        } catch(err) {
            dispatch({type: CoinsActionType.ERROR, payload: []})
        }
    }

    return (
        <CoinsContext.Provider value={{
            coins: state.coins,
            loading: state.loading,
            error: state.error,
            getCoins
        }}>
            {props.children}
        </CoinsContext.Provider>
    )
}

export default CoinsState