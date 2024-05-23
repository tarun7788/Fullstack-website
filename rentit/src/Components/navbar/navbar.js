import React from 'react'
import './navbar.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";


const Navbar=()=>{
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
      return (
        <div className='navbar'>
            <div>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()"><HiBars3 /></a>
              < Link to="/"> Home </Link>
              < Link to="/aboutus"> About-Us </Link>
              {/* < Link to="/shop"> Shop </Link> */}
                            <div className="dropdown">
              <button className="dropbtn">Shop</button>
                            <div className="dropdown-content">
                            <Link to="/"><a>Men</a></Link>
                            <Link to="/"><a>Women</a></Link>
                            <Link to="/"><a>Kids</a></Link>
                            {/* <Link to="/"><a className='access'>Accessory</a></Link> */}
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
                    <div>
                    {/* < Link to="/"> Profile </Link> */}
                    <div className="dropdown">
                    <button className="dropbtn">Profile</button>
                    <div className="dropdown-content">
                    < Link to="/signup"><a>Login</a></Link>
                    < Link to="/"><a>Logout</a></Link>
                    < Link to="/"><a>Account</a></Link>
                    </div>
                    </div>
                    <span> | </span>
                    {/* <Link to="/Signup"> SignUp </Link>
                    <span> | </span> */}
              < Link to="/cart"><FaCartPlus /></Link>
              <span> </span>
            </div>
            <div>
            < Link to='/'> <img src={require('./logo.png')} height={35}/></Link>
            </div>
          </div>
      );
}
export default Navbar;
