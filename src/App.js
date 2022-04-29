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
  
  const dispatch = useDispatch()

  const searchUser = async (user) => {
    const result = await axios.getAll(user).catch(error => {
      setMessage('User not found.')
      setTimeout(() => {
        setMessage('')
      }, 3000);
    })
    dispatch(setUser(result))
    setFoundUser(result)
  }

  
  return (
    <div className="App">
      <Search searchUser={searchUser}/>
      {foundUser ? <UserCard /> : null}
      <p>{message}</p>
    </div>
  );
}

export default App;
