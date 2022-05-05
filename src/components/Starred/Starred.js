import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import RepoCard from '../Repos/RepoCard/RepoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'



const Starred = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()

    const user = useSelector(state => state.user)
    const starredRepos = useSelector(state => state.repos)

    useEffect(() => {
      fetch(user.starred_url.split('{')[0])
    }, [fetch, user.starred_url])

  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1>{user.name} Starred Repos</h1>
      <div className='container'>  
        {starredRepos ? starredRepos
                      .map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i}/>) 
                : 
                null}
      </div>
      {isLoading ? <LoadingSpinner /> : null}
    </div>
  )
}

export default Starred

//.sort((a, b) => b.forks_count - a.forks_count)