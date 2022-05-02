import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RepoItem from './RepoItem.js/RepoItem'

import './style.css'

const Repos = () => {

    const [repos, setRepos] = useState()

    const user = useSelector(state => state)
    console.log(user)

    useEffect(() => {
        axios.get(user.repos_url).then(result => setRepos(result.data))
    }, [])
    

  return (
    <div className='container'>
      {repos ? repos.map(repo => <RepoItem key={repo.id} repo={repo}/>) : null}
    </div>
  )
}

export default Repos