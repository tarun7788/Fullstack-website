import React from "react";
import './triplet.css';
import { Link } from 'react-router-dom';


function Triplet(){
    return(
        <div className="Maintrip">
            <div className="first" id="one">
                <img src={require('./1.jpg')}/>
                <div class="details1" >
                    <p>Accessories for All!!</p>
                    <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
            <div className="second" id="one">
                <img  src={require('./2.jpg')}/>
                <div class="details2" id="btn">
                    <p>Esthetic Indian...</p>
                    <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
            <div className="third" id="one">
                <img  src={require('./3.jpg')}/>
                <div class="details3" id="btn">
                   <p> Extreme Overwears!!</p>
                   <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
        </div>
    )
}
export default Triplet;