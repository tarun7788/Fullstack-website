import  React from 'react'
import './product.css';


export default function Product3(){
    return(
        <>
        <div className='Main'>
        <h3>Boys Accessories. </h3>
        <hr/>
        <p>Here you can check out our new products with fair prices at Rent it.</p>
        <div className='boxes'>
        <div className='one1'>
        <img src={require('./p3/1.jpg')} alt='#'/>
        <h5>Rings</h5>
        <h4>₹5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p3/2.jpg')} alt='#'/>
        <h5>Braclets</h5>
        <h4>₹5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p3/3.jpg')} alt='#'/>
        <h5>Chains</h5>
        <h4>₹5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p3/4.jpg')} alt='#'/>
        <h5>Necklace</h5>
        <h4>₹5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        </div>
        </div>
        </>
    )
}