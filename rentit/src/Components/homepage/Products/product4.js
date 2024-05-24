import  React from 'react'
import './product.css';


export default function Product4(){
    return(
        <>
        <div className='Main'>
        <h3>Ladys Footwear.</h3>
        <hr/>
        <p>Here you can check out our new products with fair prices at Rent it.</p>
        <div className='boxes'>
        <div className='one1'>
        <img src={require('./p4/1.jpg')} alt='#'/>
        <h5>Sports Shoes</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p4/2.jpg')} alt='#'/>
        <h5>Jute Sandles</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p4/3.jpg')} alt='#'/>
        <h5>Kohlapuri</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p4/4.jpg')} alt='#'/>
        <h5>Stilettos</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        </div>
        </div>
        </>
    )
}