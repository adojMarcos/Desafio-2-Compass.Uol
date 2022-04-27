import { useState } from 'react';
import './App.css';
import Search from './components/Home/Search';
import axios from './services/axios'
import { Link } from 'react-router-dom'


function App() {

  const [foundUser, setFoundUser] = useState()

  const searchUser = async (user) => {
    const result = await axios.getAll(user)
    setFoundUser(result)
  }

  
  return (
    <div className="App">
      Hello
      <Search searchUser={searchUser}/>
      <Link to='/repos'><a >{foundUser ? foundUser.login : null}</a></Link>
    </div>
  );
}

export default App;
