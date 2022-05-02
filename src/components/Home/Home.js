import { useState } from 'react';
import '../../App.css';
import Search from '../Search/Search';
import axios from '../../services/axios'
import { useDispatch } from 'react-redux'
import { setUser } from '../../reducer/UserReducer'
import UserCard from '../UserCard/UserCard';

function Home() {

  const [foundUser, setFoundUser] = useState()
  const [messageClass, setMessageClass] = useState('error-message-container-disabled')
  const [cardClass, setCardClass] = useState('user-card-container-inactive')
  
  const dispatch = useDispatch()

  const searchUser = async (user) => {
    setCardClass('user-card-container-inactive')
    const result = await axios.getAll(user).catch(error => {
      setMessageClass('error-message-container-active')
      setUser('')
      setTimeout(() => {
        setMessageClass('error-message-container-disabled')
      }, 3000);
    })

    if(result) {
      dispatch(setUser(result))
      setFoundUser(result)
      setCardClass('user_card-container')
    }   
  }

  
  return (
    <div className="App">
      <Search searchUser={searchUser}/>
      <UserCard cardClass={cardClass}/>
      <div className={messageClass}>
        <p>User not found.</p>
      </div>
      
    </div>
  );
}

export default Home;