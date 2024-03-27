import React from "react";
import '../CSS/login.css';
import Navbar from "./navbar";


const Login=()=>{
    return(
        <div>
        <Navbar/>
        <input placeholder=" Enter Your User Name ..."/>
        <input placeholder=" Password "/>
        <button type="Submit">Submit</button>
        <h1>Heloo bhii dikhara hu kya ??</h1>
    </div>
    )
    
}
export default Login;