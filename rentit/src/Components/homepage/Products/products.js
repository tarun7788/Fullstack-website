import  React from 'react'
import './product.css';

let image= (<img src={require('./logo1.png')}/>)



export default function Product(){
    return(
        <>
        <p>Our feature</p>
        {image}
        </>
    )
}