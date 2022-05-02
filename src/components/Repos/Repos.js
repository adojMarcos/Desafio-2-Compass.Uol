import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RepoItem from './RepoItem.js/RepoItem'

import './style.css'

const Repos = () => {

    const [repos, setRepos] = useState()

    const user = useSelector(state => state)

    useEffect(() => {
        axios.get(user.repos_url).then(result => setRepos(result.data))
    }, [])
    

  return (
    <div className='container'>
      {repos ? repos.sort((a, b) => b.forks_count - a.forks_count)
                    .map(repo => <RepoItem key={repo.id} repo={repo}/>) 
              : 
              null}
    </div>
  )
}

export default Repos