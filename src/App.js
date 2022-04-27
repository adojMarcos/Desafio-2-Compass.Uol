import './App.css';
import Search from './components/Home/Search';
import axios from './services/axios'

const searchUser = async (user) => {
  console.log(user)
  const result = await axios.getAll(user)
  console.log(result)
}

function App() {
  return (
    <div className="App">
      Hello
      <Search searchUser={searchUser}/>
    </div>
  );
}

export default App;
