import React from 'react';
import { Router } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';
import Navbar from './Components/navbar.js'
import Login from './Components/login.js'
import Homepage from './Components/homepage.js';
import Footer from './Components/footer.js';
import AboutUs from './Components/aboutus.js';



export default function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="login" element={<Login />}/>
          <Route path="aboutus" element={<AboutUs />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
    <Footer/>
    </>
  );
}


