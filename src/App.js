import { useState } from 'react';
import './App.css';
import Search from './components/Home/Search';
import axios from './services/axios'
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/UserReducer'
import UserCard from './components/UserCard/UserCard';

function App() {

  const [foundUser, setFoundUser] = useState()
  const [message, setMessage] = useState('')
  const [cardClass, setCardClass] = useState('user-card-container-inactive')
  
  const dispatch = useDispatch()

  const searchUser = async (user) => {
    setCardClass('user-card-container-inactive')
    const result = await axios.getAll(user).catch(error => {
      setMessage('User not found.')
      setUser('')
      setTimeout(() => {
        setMessage('')
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
      <p>{message}</p>
    </div>
  );
}

export default App;
