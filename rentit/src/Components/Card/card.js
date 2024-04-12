import React from 'react';
import './card.css';

export default function Card(){
    return(
        <div className='maincard'>
            <img src={require('./logo.png')}/>
            <h4> Name</h4>
            <h5> Price</h5>
        </div>
    )
}