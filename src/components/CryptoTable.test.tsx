import { screen, render } from '@testing-library/react'
import CryptoTable from './CryptoTable'

test('must display a loading meesage if loading is true', () => {
    render(<CryptoTable />)

    screen.debug()
})