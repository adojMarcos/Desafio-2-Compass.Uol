import React from 'react'

const StarredItem = ({repo}) => {
    
  return (
    <div key={repo.id} className="repo-item" style={{border: '1px solid black'}}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
    </div>
  )
}

export default StarredItem