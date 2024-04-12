import React from 'react';
import './app.css';
import { Router } from 'react-router-dom';
import { Route , Routes} from 'react-router-dom';
import Navbar from './Components/navbar/navbar.js'
import Login from './Components/navbar/login/login.js'
import Homepage from './Components/homepage/homepage.js';
import Footer from './Components/homepage/footer/footer.js';
import AboutUs from './Components/navbar/aboutus/aboutus.js';
import Shop from './Components/View/shop.js';
import Cart from './Components/Cart/Cart.js'



export default function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="login" element={<Login />}/>
          <Route path="aboutus" element={<AboutUs />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="shop" element={<Shop />}/>
        </Routes>
    <Footer/>
    </>
  );
}


