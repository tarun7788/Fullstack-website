import  React from 'react'
import './product.css';


export default function Product1(){
    return(
        <>
        <div className='Main'>
        <h3>Our Featured</h3>
        <hr/>
        <p>Here you can check out our new products with fair prices at Rent it.</p>
        <div className='boxes'>
        <div className='one1'>
        <img src={require('./p1/1.jpg')} alt='#'/>
        <h5>Dresses</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p1/2.jpg')} alt='#'/>
        <h5>Accessories</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p1/3.jpg')} alt='#'/>
        <h5>Bags</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p1/42.jpg')} alt='#'/>
        <h5>Glasses</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        </div>
        </div>
        </>
    )
}