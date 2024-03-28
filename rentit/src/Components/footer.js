import React from 'react';
import '../CSS/footer.css';

function Footer(){
    return(
        <div className="main" id='footer'>
            <img src={require('../images/logo.png')} height={35}/>
        </div>
    )
}
export default Footer;
