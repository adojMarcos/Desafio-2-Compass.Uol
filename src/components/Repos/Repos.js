import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import RepoCard from './RepoCard/RepoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useGoBack } from '../../services/goBack'
import { useFetch } from '../../services/useFetch'

const Repos = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()

    const repos = useSelector(state => state.repos)
    const user = useSelector(state => state.user)

    useEffect(() => {
      fetch(user.repos_url)     
    }, [])
    

  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1 className="repo-container-text">{user.name} Repositories</h1>
      <div className='container'>  
        {repos ? repos
                      .map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i}/>) 
                : 
                null}
      </div>
      {isLoading ? <LoadingSpinner /> : null}
    </div>
  )
}

export default Repos
//.sort((a, b) => b.forks_count - a.forks_count)