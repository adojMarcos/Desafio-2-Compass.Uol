import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setRepos, cleanState } from '../reducer/ReposReducer'
import axios from 'axios'

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    const fetch = (url) => {
            dispatch(cleanState())
            setIsLoading(true)
            axios.get(url).then(result => {
              dispatch(setRepos(result.data))
              setIsLoading(false) 
            })         
    }
    
    return [isLoading, fetch]

}