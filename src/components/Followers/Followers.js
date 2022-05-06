import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'
import { useLoader } from '../../customHooks/useLoader'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import FollowerCard from './FollowerCard/FollowerCard'

const Followers = () => {

    const goBack = useGoBack()
    const [isLoading,, fetchFollowers] = useFetch()

    const [ , loaderFollowers ] = useLoader()

    const { user, load, followers } = useSelector(state => state)

    useEffect(() => {
      fetchFollowers(user.followers_url)     
    }, [])

    return (
        <div className="repo-container">
        <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
        <h1 className="repo-container-text">User Followers</h1>
        
        <div className='container'>  
          {followers && followers.map((follower, i) => <FollowerCard key={follower.id} follower={follower} index={i} />)}
        </div>

        {isLoading && <LoadingSpinner />}
        {!isLoading && <button className="load-button" onClick={() => loaderFollowers(user.followers_url)}>{load ? 'Loading...' : 'Load More'}</button>}
        </div>
    )
}

export default Followers