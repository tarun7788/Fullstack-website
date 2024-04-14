import React from 'react';
import './footer.css';

function Footer(){
    return(
        <div className="main5" >
        <img src={require('./logo.png')} height={35}/>

        <div className='listing'>
            <h5> Featured </h5>
            <ul>
                <li><a href='#'> Men</a></li>
                <li><a> Women</a></li>
                <li><a> Kids </a></li>
                <li><a> Accessories</a></li>
                <li><a> Shoes</a></li> 
            </ul>
        </div>
        </div>
    )
}
export default Footer;
