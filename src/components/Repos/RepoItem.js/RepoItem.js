import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEye } from '@fortawesome/free-solid-svg-icons'
import './style.css'

<i class="fa-solid fa-code-fork"></i>

const RepoItem = ({repo}) => {

  
  return (
    <div key={repo.id} className="repo-item">
        <h3><a target="_blank" href={repo.html_url} style={{textDecoration: 'none', color: '#EEEEEE', fontSize: '1.6rem'}}>{repo.name}</a></h3>
        <p style={{marginBottom: '3rem'}}>{repo.description}</p>
        <div className="repo-item-info">
          <span style={{marginRight: '1rem'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '0.5rem'}}/>{repo.forks_count}</span>
          <span><FontAwesomeIcon icon={faEye} style={{marginRight: '0.5rem'}}/>{repo.watchers_count}</span>
        </div>
    </div>
  )
}

export default RepoItem