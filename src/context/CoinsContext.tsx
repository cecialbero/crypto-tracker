import { createContext } from 'react'

const defaultValue = {
    coins: [],
    getCoins: () => {}
}

export const CoinsContext = createContext(defaultValue);