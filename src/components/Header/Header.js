import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { useNavigate } from 'react-router'


const Header = () => {

  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(-1)
  }

  return (
    <header>
        <div  onClick={handleOnClick} className='wrapper_header'>
            <FontAwesomeIcon icon={faCodeBranch} size='2x' />
            <span>Git Search</span>
        </div>
    </header>
  )
}

export default Header