import React from 'react'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header>
        <div className='wrapper_header'>
            <FontAwesomeIcon icon={faCodeBranch} size='2x' />
            <span>Git Search</span>
        </div>
    </header>
  )
}

export default Header