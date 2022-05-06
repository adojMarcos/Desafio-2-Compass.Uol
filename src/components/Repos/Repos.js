import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import RepoCard from './RepoCard/RepoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'
import { useLoader } from '../../customHooks/useLoader'

const Repos = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()

    const [ loader ] = useLoader()

    const { user, cards: repos, load } = useSelector(state => state)

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
      {!isLoading && <button className="load-button" onClick={() => loader(user.repos_url)}>{load ? 'Loading...' : 'Load More'}</button>}
    </div>
  )
}

export default Repos
//