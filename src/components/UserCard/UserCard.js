import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

const UserCard = ( { cardClass }  ) => {

    const user = useSelector(state => state.user)

  return (
      <div className={cardClass}>
          <img src={user.avatar_url} alt="user avatar" className="user_img" />
          <p><a className="anchor-reset" target="_blank" href={user.html_url}>{user.name}</a></p>
          <p>{user.bio}</p>
          <div className="nav-user">
              <Link className="anchor-reset" to='followers'><span>{user.followers} Followers</span></Link>
              <Link className="anchor-reset" to="following"><span>{user.following} Following</span></Link>
          </div>
          <div className='nav-buttons'>
            <Link to='/repos'>{user ? <button type='button' >Repos</button> : null}</Link>
            <Link to='/starred'>{user ? <button type='button'>Starred</button> : null}</Link>      
          </div>
      </div>
  )
}

export default UserCard