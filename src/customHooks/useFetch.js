import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setRepos, cleanState } from '../reducer/ReposReducer'
import axios from '../services/axios'

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    const fetch = async (url)  => {
            dispatch(cleanState())
            setIsLoading(true)
            const data = await axios.getRepos(url)
            dispatch(setRepos(data))
            setIsLoading(false)  
    }
    
    return [isLoading, fetch]

}