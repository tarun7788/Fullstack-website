import  React from 'react'
import './window.css';
import { Link } from 'react-router-dom';

export default function Window(){
    return(
        <>
        <div className='main1'>
            <div className='text1'>
        <h4>Season's sale</h4>
          <h2>  Rent a complete outfit <br/>
            and get 20% off</h2>
            <Link to="/shop"> <button>Shop Now</button> </Link>
            </div>
        </div>
        </>
    )
}