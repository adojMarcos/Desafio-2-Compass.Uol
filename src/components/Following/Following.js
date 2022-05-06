import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGoBack } from '../../customHooks/goBack'
import { useFetch } from '../../customHooks/useFetch'
import { useLoader } from '../../customHooks/useLoader'
import FollowerCard from '../Followers/FollowerCard/FollowerCard'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Following = () => {

    const goBack = useGoBack()
    const [isLoading, fetch] = useFetch()

    const [ loader ] = useLoader()

    const { user, cards: followers, load } = useSelector(state => state)

    useEffect(() => {
      fetch(user.following_url.split('{')[0])     
    }, [])

    return (
        <div className="repo-container">
        <FontAwesomeIcon onClick={goBack} color='#393E46' icon={faArrowCircleLeft} size='3x' className="navigation-arrow"/>
        <h1 className="repo-container-text">{user.name} Following</h1>
        
        <div className='container'>  
          {followers && followers.map((follower, i) => <FollowerCard key={follower.id} follower={follower} index={i} />)}
        </div>

        {isLoading && <LoadingSpinner />}
        {!isLoading && <button className="load-button" onClick={() => loader(user.following_url.split('{')[0])}>{load ? 'Loading...' : 'Load More'}</button>}
        </div>
    )
}

export default Following