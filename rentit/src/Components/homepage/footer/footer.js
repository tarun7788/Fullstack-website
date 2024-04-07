import React from 'react';
import './footer.css';

function Footer(){
    return(
        <div className="main5" >
        <img src={require('./logo.png')} height={35}/>

        <div className='listing'>
            <h5> Featured </h5>
            <ul>
                <li> jhs </li>
                <li> jhg </li>
                <li> jhg </li>
                <li> jhg </li>
                <li> jhg </li> 
            </ul>
        </div>
        </div>
    )
}
export default Footer;
