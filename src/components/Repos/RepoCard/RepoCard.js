import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEye } from '@fortawesome/free-solid-svg-icons'
import './style.css'

<i class="fa-solid fa-code-fork"></i>

const RepoCard = ({repo, index}) => {
  console.log(index)
  return (
    <div key={repo.id} className="repo-card" style={{animationDelay: `${(index + 1) * 0.2}s`}}>
        <h3><a className="" target="_blank" rel="noreferrer" href={repo.html_url} style={{textDecoration: 'none', color: '#EEEEEE', fontSize: '1.6rem'}}>{repo.name}</a></h3>
        <p style={{marginBottom: '3rem'}}>{repo.description}</p>
        <div className="repo-card-info">
          <span style={{marginRight: '1rem'}}><FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '0.5rem'}}/>{repo.forks_count}</span>
          <span><FontAwesomeIcon icon={faEye} style={{marginRight: '0.5rem'}}/>{repo.watchers_count}</span>
        </div>
    </div>
  )
}

export default RepoCard