import { setFalse, setTrue } from '../reducer/LoadingReducer'
import { loadMoreCards } from '../reducer/CardsReducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from '../services/axios'


export const useLoader = () => {
    const [page, setPage] = useState(2)
    const dispatch = useDispatch()

    const loader = async (url) => {
        dispatch(setTrue())
        const data = await axios.getRepos(url, page)
        dispatch(loadMoreCards(data))
        dispatch(setFalse())
        setPage(state => state + 1)
    }

    return [ loader ]
}