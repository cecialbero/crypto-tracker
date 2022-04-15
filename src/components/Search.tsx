import { useState } from 'react';
import { Input } from '@chakra-ui/react';

const Search = () => {
    const [search, setSearch] = useState('');
    console.log(search)
    return (
        <form>
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