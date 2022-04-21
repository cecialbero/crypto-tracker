import { useContext, useState } from 'react'
import { CoinsContext } from '../context/CoinsContext'
import '../styles/pagination.scss'

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const coinsContext = useContext(CoinsContext)

    const onClickPagination = (index: number) => {
        setCurrentPage(index)
        coinsContext.getCoins(index)
    }

    return (
        <div className='pagination'>
            <ul>
                {totalPages.map((page, i) => (
                        <li 
                            onClick={() => onClickPagination(i+1)}
                            className={i+1 === currentPage ? 'current' : ''}
                        >{page}</li>
                    )       
                )}
            </ul>
        </div>
    )
}

export default Pagination