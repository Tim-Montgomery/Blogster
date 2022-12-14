import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Post from './components/Post';
import Home from './components/Home';


function App() {
  const[currentUser, setCurrentUser] = useState()

  useEffect(()=>{
    fetch('/auth')
    .then((response)=>{
      if(response.ok){
        response.json().then((currentUser)=> setCurrentUser(currentUser))
      }
    });
  },[])

  return(
    <>
    <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <main>
      {currentUser ? (
        <Routes>
        <Route exact path="/" element={<Home currentUser={currentUser} />}></Route>
        <Route exact path="/home" element={<Home currentUser={currentUser} />}></Route>
        <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser} />}></Route>
        <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}></Route>
        <Route exact path="/profile" element={<Profile currentUser={currentUser} />}></Route>
        <Route exact path="/post" element={<Post currentUser={currentUser}/>}></Route>
      </Routes>
      ) : (     
        <Routes>
          <Route exact path="/" element={<Home currentUser={currentUser} />}></Route>
          <Route exact path="/home" element={<Home currentUser={currentUser} />}></Route>
          <Route exact path="/login" element={<Login setCurrentUser={setCurrentUser} />}></Route>
          <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser} />}></Route>
        </Routes>
      )}
    </main>
    </>
  );
}

export default App
