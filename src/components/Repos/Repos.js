import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RepoItem from './RepoItem.js/RepoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { useNavigate } from 'react-router'

const Repos = () => {

    const [repos, setRepos] = useState()
    const navigate = useNavigate()

    const handleOnClick = () => {
      navigate(-1)
    }

    const user = useSelector(state => state)

    useEffect(() => {
        axios.get(user.repos_url).then(result => setRepos(result.data))
    }, [])
    

  return (
    <div className="repo-container">
      <FontAwesomeIcon onClick={handleOnClick} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
      <h1>{user.name} Repositories</h1>
      <div className='container'>  
        {repos ? repos.sort((a, b) => b.forks_count - a.forks_count)
                      .map((repo, i) => <RepoItem key={repo.id} repo={repo} index={i}/>) 
                : 
                null}
      </div>
    </div>
  )
}

export default Repos