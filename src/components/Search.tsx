import { useState } from 'react';
import { Input } from '@chakra-ui/react';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                type='search'
                name='search'
                placeholder='Search Coin'
                onChange={(e: any) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Search