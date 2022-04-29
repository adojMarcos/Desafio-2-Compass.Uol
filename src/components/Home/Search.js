import React, { useState } from 'react'

const Search = ( { searchUser } ) => {

  const [user, setUser] = useState('')
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      searchUser(user)
    }}>
        <input value={user} type='text' onChange={(e) => setUser(e.target.value)}/>
        <button>Search</button>
       
    </form>
  )
}

export default Search