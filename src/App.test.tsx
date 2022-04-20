import { screen, render } from '@testing-library/react'
import { App } from './App'
import { CoinsContext } from './context/CoinsContext'

test('must display a title', () => {
  render(<App />)
  const appTitle = screen.getByText(/Top 10 Cryptocurrency Prices by Market Cap/i)

  expect(appTitle).toBeInTheDocument()
})

test('must display an error message if error is true', async () => {
  render(<CoinsContext.Provider value={{
    coins: [],
    loading: false,
    error: true,
    getCoins(){}
  }}>
    <App />
  </CoinsContext.Provider>)

  expect(await screen.findByRole('alert', {name: ''})).toBeInTheDocument()
  expect(await screen.findByText(/Ups, looks like there's no data available/i)).toBeInTheDocument()
  expect(await screen.findByText(/We are working on a solution, try again later/i)).toBeInTheDocument()
})
