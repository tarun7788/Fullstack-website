import React from 'react';
import Reuse from './reuse';
import './reusein.css'

const handleButtonClick = () => {
    console.log('Button clicked');
  };

export default function Reusein(){
    return(
        <div className='reuse'>
        <Reuse 
        imageUrl="./logo1.png"
        heading="Welcome to our website"
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
        />
         <Reuse 
        imageUrl="./logo1.png"
        heading="Welcome to our website"
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
        />
         <Reuse 
        imageUrl="./logo1.png"
        heading="Welcome to our website"
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
        />
         <Reuse 
        imageUrl="./logo1.png"
        heading="Welcome to our website"
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
        />
        </div>
    )
}