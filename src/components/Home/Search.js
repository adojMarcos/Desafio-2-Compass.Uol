import React, { useState } from 'react'
import './style.css'

const Search = ( { searchUser } ) => {

  const [user, setUser] = useState('')
  

  return (
    <form className="form-search-user" onSubmit={(e) => {
      e.preventDefault()
      searchUser(user)
    }}>
        <input placeholder="Enter a username" value={user} type='text' onChange={(e) => setUser(e.target.value)} className='search-user'/>
        <button className='search-button'>Search</button> 
    </form>
  )
}

export default Search