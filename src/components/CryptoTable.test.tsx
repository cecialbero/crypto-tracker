import { screen, render } from '@testing-library/react'
import CryptoTable from './CryptoTable'
import { CoinsContext } from '../context/CoinsContext'

test('must display a spinner with a message if loading is true', () => {
    render(<CryptoTable />)

    const loader = document.querySelector('.loader')
    const loaderText = document.querySelector('.loader p')

    expect(loader).toBeInTheDocument();
    expect(loaderText).toHaveTextContent(/Loading Coins/i)
})

test('must display a table with column headers if coin has value', async () => {
    render(
        <CoinsContext.Provider value={{
            coins: [],
            error: false,
            loading: false,
            getCoins() {}
        }}>
            <CryptoTable />
        </CoinsContext.Provider>
    )

    expect(await screen.findByRole('columnheader', {name: '#'})).toHaveTextContent(/#/i)
    expect(await screen.findByRole('columnheader', {name: 'Coin'})).toHaveTextContent(/Coin/i)
    expect(await screen.findByRole('columnheader', {name: 'Price'})).toHaveTextContent(/Price/i)
    expect(await screen.findByRole('columnheader', {name: 'Mkt Cap'})).toHaveTextContent(/Mkt Cap/i)
    expect(await screen.findByRole('columnheader', {name: '24h'})).toHaveTextContent(/24h/i)
    expect(await screen.findByRole('table', {name: ''})).toBeInTheDocument()
})