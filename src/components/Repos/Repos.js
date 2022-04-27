import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Repos = () => {

    const [repos, setRepos] = useState()

    const user = useSelector(state => state)
    console.log(user)

    useEffect(() => {
        axios.get(user.repos_url).then(result => setRepos(result.data))
    }, [])
    

  return (
    <div>{repos ? repos.map(x => <div key={x.id}>{x.name}</div>) : null}</div>
  )
}

export default Repos