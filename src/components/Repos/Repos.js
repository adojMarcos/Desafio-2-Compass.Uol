import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import RepoCard from './RepoCard/RepoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'
import axios from '../../services/axios'
import { useDispatch } from 'react-redux'
import { loadMoreRepos } from '../../reducer/ReposReducer'



const Repos = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()
    const [page, setPage] = useState(2)

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos)
    const user = useSelector(state => state.user)

    const handleLoadClick = async () => {
      const data = await axios.getRepos(user.repos_url, page)
      dispatch(loadMoreRepos(data))
      setPage(state => state + 1)
    }

    useEffect(() => {
      fetch(user.repos_url)     
    }, [])
    
  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1 className="repo-container-text">{user.name} Repositories</h1>
      <div className='container'>  
        {repos && [...repos].map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i}/>)}
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <button className="load-button" onClick={handleLoadClick}>Load More</button>}
    </div>
  )
}

export default Repos
//