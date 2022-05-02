import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RepoItem from '../Repos/RepoItem.js/RepoItem'

const Starred = () => {

    const [starredRepos, setStarredRepos] = useState()

    const user = useSelector(state => state)
    console.log(user)

    useEffect(() => {
        axios.get(user.starred_url.split('{')[0]).then(result => setStarredRepos(result.data))
    }, [])

  return (
    <div className='container'>
      {starredRepos ? starredRepos.map(repo => <RepoItem key={repo.id} repo={repo}/>) : null}
    </div>
  )
}


export default Starred