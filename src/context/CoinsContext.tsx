import { createContext } from 'react'

const defaultValue = {
    coins: [],
    loading: true,
    error: false,
    getCoins: ():any => {}
}

export const CoinsContext = createContext(defaultValue);