import { createContext } from 'react'

const defaultValue = {
    coins: [],
    getCoins: ():any => {}
}

export const CoinsContext = createContext(defaultValue);