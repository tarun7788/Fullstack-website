import React from 'react'
import './navbar.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (
        <div className='navbar'>
            <div>
              < Link to="/"> Home </Link>
              < Link to="/aboutus"> About-Us </Link>
              < Link to="/"> Orders </Link>
            </div>
            <div>
              < Link to="/"> SignUp </Link>
              <span> | </span>
              <Link to="/login"> SignIn </Link>
              <span> | </span>
              < Link to="/"><FaCartPlus /></Link>
              <span> </span>
            </div>
            <div>
            < Link to='/'> <img src={require('./logo.png')} height={35}/></Link>
            </div>
          </div>
      );
}
export default Navbar;
