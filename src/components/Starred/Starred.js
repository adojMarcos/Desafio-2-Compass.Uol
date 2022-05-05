import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import RepoCard from '../Repos/RepoCard/RepoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'
import { loadMoreRepos } from '../../reducer/ReposReducer'
import axios from '../../services/axios'
import { setFalse, setTrue } from '../../reducer/LoadingReducer'

const Starred = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()
    const [page, setPage] = useState(2)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const starredRepos = useSelector(state => state.repos)
    const load = useSelector(state => state.load)

    const handleLoadClick = async () => {
      dispatch(setTrue())
      const data = await axios.getRepos(user.starred_url.split('{')[0], page)
      dispatch(loadMoreRepos(data))
      dispatch(setFalse())
      setPage(state => state + 1)
    }

    useEffect(() => {
      fetch(user.starred_url.split('{')[0])
    }, [])

  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1>{user.name} Starred Repos</h1>
      <div className='container'>  
        {starredRepos && starredRepos.map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i}/>)}
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <button className="load-button" onClick={handleLoadClick}>{load ? 'Loading...' : 'Load More'}</button>}
    </div>
  )
}

export default Starred
