import React from 'react'
import ReactDOM from 'react-dom/client';
import '../CSS/navbar.css';

function Navbar(){
    return (
        <div className='navbar'>
            <div>
              <a href='#'> Home </a>
              <a href='#'> Contact Us </a>
              <a href='#'> About Us </a>
              <a href='#'> Orders </a>
              <a href='#'> Home </a>
            </div>
            <div>
              <a href='#'> SignUp </a>
              <span> | </span>
              <a href='#'> SignIn </a>

            </div>
          </div>
      );
}
export default Navbar;
