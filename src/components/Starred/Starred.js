import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Starred = () => {

    const [starredRepos, setStarredRepos] = useState()

    const user = useSelector(state => state)
    console.log(user)

    useEffect(() => {
        axios.get(user.starred_url.split('{')[0]).then(result => setStarredRepos(result.data))
    }, [])

  return (
    <div>{starredRepos ? starredRepos.map(x => <div key={x.id}>{x.name}</div>) : null}</div>
  )
}


export default Starred