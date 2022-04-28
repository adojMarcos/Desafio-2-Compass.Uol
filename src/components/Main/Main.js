import { useState } from 'react';
import './App.css';
import Search from './components/Home/Search';
import axios from './services/axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/UserReducer'
import React from 'react'
import UserCard from '../UserCard/UserCard';


const Main = () => {
    const [foundUser, setFoundUser] = useState()
    const dispatch = useDispatch()

    const searchUser = async (user) => {
        const result = await axios.getAll(user)
        dispatch(setUser(result))
        setFoundUser(result)
    }

    return (
        <div >
            <Search searchUser={searchUser}/>
            <Link to='/repos'>{foundUser ? "Ver repositórios | " : null}</Link> 
            <Link to='/starred'>{foundUser ? "Ver favoritos" : null}</Link>
            <UserCard />
            <h1>kjdfçdfsç</h1>
        </div>
    )
}

export default Main