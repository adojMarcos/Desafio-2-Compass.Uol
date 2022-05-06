import React from 'react'

const FollowerCard = ( { follower, index} ) => {
  return (
    <div key={follower.id} className="repo-card" style={{animationDelay: `${((index) * 0.1) % 3}s`}}>
        <img src={follower.avatar_url} alt="user avatar" className="user_img" />
        <p style={{fontSize: '2rem'}}>{follower.login}</p>
    </div>
  )
}

export default FollowerCard