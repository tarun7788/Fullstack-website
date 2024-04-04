import React from 'react';
import './footer.css';

function Footer(){
    return(
        <div className="main" id='footer'>
            <img src={require('./logo.png')} height={35}/>
        </div>
    )
}
export default Footer;
