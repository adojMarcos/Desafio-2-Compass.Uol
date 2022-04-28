import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const UserCard = () => {

    const user = useSelector(state => state)

  return (
      <div className='user_card-container'>
          <img src={user.avatar_url} alt="user photo" className="user_img" />
          <p>{user.name}</p>
          <p>{user.bio}</p>
          <div>
              <span>{user.followers} Followers</span>
              <span>{user.following} Following</span>
          </div>
          <div className='nav-buttons'>
            <Link to='/repos'>{user ? <button type='button' >Repositorios</button> : null}</Link>
            <Link to='/starred'>{user ? <button>Favoritos</button> : null}</Link>      
          </div>
      </div>
  )
}

export default UserCard