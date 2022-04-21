import { createContext } from 'react'

const defaultValue = {
    coins: [],
    loading: true,
    error: false,
    getCoins: (pageNumber: number) => {}
}

export const CoinsContext = createContext(defaultValue);