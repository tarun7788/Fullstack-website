import React from 'react'
import './navbar.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";


const Navbar=()=>{
      return (
        <div className='navbar' id='myTopnav'>


          <div className='icon'>
          <div className="dropdown">
              <button className="dropbtn"><FaBars /></button>
                            <div className="dropdown-content">
                            <Link to="/">Login/Logout</Link>
                            <Link to="/">Cart <FaCartPlus /></Link>
                            < Link to="/"> Home </Link>
                            < Link to="/aboutus"> About-Us </Link>
                            <Link to="/">Shop</Link>
                            </div>
                            </div>
                            </div>
            <div className='one'>
              < Link to="/"> Home </Link>
              < Link to="/aboutus"> About-Us </Link>
              <div className="dropdown">
              <button className="dropbtn">Shop</button>
                            <div className="dropdown-content">
                            <Link to="/"><a>Men</a></Link>
                            <Link to="/"><a>Women</a></Link>
                            <Link to="/"><a>Kids</a></Link>
                            <div className="dropdown-access">
                            <Link to="/"><a className='access'>Accessory</a></Link>
                            <div className="access-content">
                            < Link to="/"><a>Login</a></Link>
                            < Link to="/"><a>Logout</a></Link>
                            < Link to="/"><a>Account</a></Link>
                            </div>
                            </div>
                            <Link to="/"><a>Shoes</a></Link>
                    </div>
                    </div>
            </div>
            <div className='two'>
              <div className="dropdown">
                <button className="dropbtn">Profile</button>
                    <div className="dropdown-content">
                      < Link to="/signup"><a>Login</a></Link>
                      < Link to="/"><a>Logout</a></Link>
                      < Link to="/"><a>Account</a></Link>
                    </div>
              </div>
                <span> | </span>
              < Link to="/cart"><FaCartPlus /></Link>
            </div>
            <div className='three'>
            < Link to='/'> <img src={require('./logo.png')} height={35}/></Link>
            </div>
        </div>
      );
}
export default Navbar;
