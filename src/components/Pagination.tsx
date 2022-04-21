import { useContext, useState } from 'react'
import { CoinsContext } from '../context/CoinsContext'
import '../styles/pagination.scss'

interface PaginationProps {
    totalPages: number
}

const Pagination = ({totalPages}: PaginationProps): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState<Array<Number>>([])

    while(pages.length < totalPages) {
        setPages([...pages, totalPages])
        totalPages--
    }

    const coinsContext = useContext(CoinsContext)

    const onClickPagination = (index: number) => {
        setCurrentPage(index)
        coinsContext.getCoins(index)
    }

    return (
        <div className='pagination'>
            <ul>
                {pages.map((page, i) => (
                        <li 
                            key={i}
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