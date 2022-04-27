import { useState } from 'react';
import './App.css';
import Search from './components/Home/Search';
import axios from './services/axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/UserReducer'

function App() {

  const [foundUser, setFoundUser] = useState()
  const dispatch = useDispatch()

  const searchUser = async (user) => {
    const result = await axios.getAll(user)
    dispatch(setUser(result))
    setFoundUser(result)
  }

  
  return (
    <div className="App">
      <Search searchUser={searchUser}/>
      <Link to='/repos'>{foundUser ? "Ver repositórios | " : null}</Link> 
      <Link to='/starred'>{foundUser ? "Ver favoritos" : null}</Link>
    </div>
  );
}

export default App;
