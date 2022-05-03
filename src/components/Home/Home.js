import { useEffect, useState } from 'react';
import '../../App.css';
import Search from '../Search/Search';
import axios from '../../services/axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../reducer/UserReducer'
import UserCard from '../UserCard/UserCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Home() {

  const [messageClass, setMessageClass] = useState('error-message-container-disabled')
  const [cardClass, setCardClass] = useState('user-card-container-inactive')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const searchUser = async (user) => {
    setIsLoading(true);
    setCardClass('user-card-container-inactive')
    const result = await axios.getAll(user).catch(error => {
      setIsLoading(false);
      setMessageClass('error-message-container-active')
      setUser('')
      setTimeout(() => {
        setMessageClass('error-message-container-disabled')
      }, 3000);
    })

    if(result) {
      dispatch(setUser(result))
      setCardClass('user_card-container')
      setIsLoading(false)
    }   
  }

  return (
    <div className="App">
      <Search searchUser={searchUser}/>
      <UserCard cardClass={cardClass}/>
      <div className={messageClass}>
        <p>User not found.</p>
      </div>
      {isLoading ? <LoadingSpinner /> : null}
    </div>
    
  );
}

export default Home;