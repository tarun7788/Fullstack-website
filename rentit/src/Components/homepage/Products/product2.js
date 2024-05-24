import  React from 'react'
import './product.css';


export default function Product2(){
    return(
        <>
        <div className='Main'>
        <h3>Boys Outfit.</h3>
        <hr/>
        <p>Here you can check out our new products with fair prices at Rent it.</p>
        <div className='boxes'>
        <div className='one1'>
        <img src={require('./p2/1.jpg')} alt='#'/>
        <h5>Casuals</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p2/2.jpg')} alt='#'/>
        <h5>Formals</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p2/3.jpg')}alt='#'/>
        <h5>Kids</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        <div className='one1'>
        <img src={require('./p2/4.jpg')} alt='#'/>
        <h5>Twining</h5>
        <h4>$5/day</h4>
        <button class="buy-btn">Rent It</button>
        </div>
        </div>
        </div>
        </>
    )
}