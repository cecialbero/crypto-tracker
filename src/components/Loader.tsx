import { Spinner } from '@chakra-ui/react'

import './Loader.scss'

interface LoaderProps {
    msg: string
}

const Loader = ({msg}: LoaderProps): JSX.Element => {
    return (
        <div className='loader'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            <p>{msg}</p>
        </div>
    )
}

export default Loader