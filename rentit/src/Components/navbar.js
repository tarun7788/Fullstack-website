import React from 'react'
import ReactDOM from 'react-dom/client';
import '../CSS/navbar.css';
import { FaCartPlus } from "react-icons/fa";


function Navbar(){
    return (
        <div className='navbar'>
            <div>
              <a href='#'> <img src=''></img> </a>
              <a href='#'> Home </a>
              <a href='#'> Contact Us </a>
              <a href='#'> About Us </a>
              <a href='#'> Orders </a>
            </div>
            <div>
              <a href='#'> SignUp </a>
              <span> | </span>
              <a href='#'> SignIn </a>
              <span> | </span>
              <a href='#'><FaCartPlus /></a>
              <span> </span>
            </div>
            <div>
            <a href='./'> <img src={require('../images/logo.png')} height={35}/></a>
            </div>
          </div>
      );
}
export default Navbar;
