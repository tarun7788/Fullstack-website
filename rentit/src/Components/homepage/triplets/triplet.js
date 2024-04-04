import React from "react";
import './triplet.css';


function Triplet(){
    return(
        <div className="Maintrip" id="new">
            <div className="first">
                <img id="one" className="images" src={require('./1.jpg')}/>
                <div class="details">
                    <p>Accessories for All!!</p>
                    <button class="upper-case">Shop Now</button>
                </div>
            </div>
            <div className="first">
                <img id="one" className="images" src={require('./2.jpg')}/>
                <div class="details">
                    <p>Esthetic Indian...</p>
                    <button class="upper-case">Shop Now</button>
                </div>
            </div>
            <div className="first">
                <img id="one" className="images" src={require('./3.jpg')}/>
                <div class="details">
                   <p> Extreme Overwears!!</p>
                    <button class="upper-case">Shop Now</button>
                </div>
            </div>
        </div>
    )
}
export default Triplet;