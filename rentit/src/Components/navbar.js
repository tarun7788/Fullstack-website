import React from 'react'
import '../CSS/navbar.css';
import { FaCartPlus } from "react-icons/fa";
import { Outlet,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className='navbar'>
            <div>
              < NavLink to="/"> Home </NavLink>
              < NavLink to="/"> About-Us </NavLink>
              < NavLink to="/"> Orders </NavLink>
            </div>
            <div>
              < NavLink to="/logout"> Logout </NavLink>
              <span> | </span>
              <NavLink to="/login"> Login </NavLink>
              <span> | </span>
              < NavLink to="/"><FaCartPlus /></NavLink>
              <span> </span>
            </div>
            <div>
            < NavLink href='./'> <img src={require('../images/logo.png')} height={35}/></NavLink>
            </div>
          </div>
      );
}
export default Navbar;
