import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RepoCard from '../Repos/RepoCard/RepoCard'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'


const Starred = () => {

    const [starredRepos, setStarredRepos] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleOnClick = () => {
      navigate(-1)
    }

    const user = useSelector(state => state)

    useEffect(() => {
      setIsLoading(true)
      axios.get(user.starred_url.split('{')[0]).then(result => {
        setStarredRepos(result.data)
        setIsLoading(true)
      })
    }, [user.starred_url])

  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={handleOnClick} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1>{user.name} Repositories</h1>
      <div className='container'>  
        {starredRepos ? starredRepos.sort((a, b) => b.forks_count - a.forks_count)
                      .map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i}/>) 
                : 
                null}
      </div>
      {isLoading ? <LoadingSpinner /> : null}
    </div>
  )
}


export default Starred