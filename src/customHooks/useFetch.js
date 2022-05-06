import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setCards, cleanState } from '../reducer/CardsReducer'
import axios from '../services/axios'

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    const fetch = async (url)  => {
            console.log(url)
            dispatch(cleanState())
            setIsLoading(true)
            const data = await axios.getRepos(url)
            dispatch(setCards(data))
            setIsLoading(false)  
    }

    return [isLoading, fetch]

}