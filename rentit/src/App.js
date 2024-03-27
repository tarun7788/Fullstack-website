import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Navbar from './Components/navbar.js'
import Login from './Components/login.js'
import Homepage from './Components/homepage.js';


export default function App() {
  var Component=<Homepage/>
  const pathname = window.location.pathname;
if(pathname==="/login"){
  Component=<Login/>
}
  return (
    <>
    <Navbar/>
    {Component}
    <Routes> 
          <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}


