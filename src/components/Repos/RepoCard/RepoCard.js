import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEye } from '@fortawesome/free-solid-svg-icons'
import './style.css'

<i class="fa-solid fa-code-fork"></i>

const RepoCard = ({repo, index}) => {
  return (
    <div key={repo.id} className="repo-card" style={{animationDelay: `${((index) * 0.1) % 3}s`}}>
        <h3><a className="repo-card-link" target="_blank" rel="noreferrer" href={repo.html_url}>{repo.name}</a></h3>
        <p style={{marginBottom: '3rem'}}>{repo.description}</p>
        <div className="repo-card-info">
          <span style={{marginRight: '1rem'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '0.5rem'}}/>{repo.forks_count}</span>
          <span><FontAwesomeIcon icon={faEye} style={{marginRight: '0.5rem'}}/>{repo.watchers_count}</span>
        </div>
    </div>
  )
}

export default RepoCard