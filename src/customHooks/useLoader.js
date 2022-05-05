import { setFalse, setTrue } from '../reducer/LoadingReducer'
import { loadMoreRepos } from '../reducer/ReposReducer'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from '../services/axios'

export const useLoader = () => {
    const [page, setPage] = useState(2)
    const dispatch = useDispatch()

    const loader = async (url) => {
        dispatch(setTrue())
        const data = await axios.getRepos(url, page)
        dispatch(loadMoreRepos(data))
        dispatch(setFalse())
        setPage(state => state + 1)
    }

    return [loader]
}