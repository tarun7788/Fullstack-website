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
        
        
    </div>
    )
    
}
export default Login;