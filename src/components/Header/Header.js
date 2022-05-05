import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { useGoBack } from '../../customHooks/goBack'


const Header = () => {

  const goBack = useGoBack()
  
  return (
    <header>
        <div onClick={goBack} className='wrapper_header'>
            <FontAwesomeIcon icon={faCodeBranch} size='2x' />
            <span>Git Search</span>
        </div>
    </header>
  )
}

export default Header