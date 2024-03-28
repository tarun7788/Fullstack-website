// import React from "react";
// import '../CSS/login.css';
// import Navbar from "./navbar";


// const Login=()=>{
//     return(
//         <div>
//         <Navbar/>
//         <input placeholder=" Enter Your User Name ..."/>
//         <input placeholder=" Password "/>
//         <button type="Submit">Submit</button>
        
        
//     </div>
//     )
    
// }
// export default Login;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  return <button onClick={() => 
    loginWithRedirect()}>
      Log In
      </button>;
     
};

export default LoginButton;