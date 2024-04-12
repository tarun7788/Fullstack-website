import React from "react";
import './triplet.css';
import { Link } from 'react-router-dom';


function Triplet(){
    return(
        <div className="Maintrip" id="new">
            <div className="first">
                <img id="one" className="images" src={require('./1.jpg')}/>
                <div class="details">
                    <p>Accessories for All!!</p>
                    <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
            <div className="first">
                <img id="one" className="images" src={require('./2.jpg')}/>
                <div class="details">
                    <p>Esthetic Indian...</p>
                    <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
            <div className="first">
                <img id="one" className="images" src={require('./3.jpg')}/>
                <div class="details">
                   <p> Extreme Overwears!!</p>
                   <Link to="/shop"> <button class="upper-case">Shop Now</button> </Link>
                </div>
            </div>
        </div>
    )
}
export default Triplet;