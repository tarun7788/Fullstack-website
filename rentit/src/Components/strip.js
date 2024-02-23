import React from 'react';
import '../CSS/strip.css';

const Strip=()=>{
    return(
        <div className='logodisplay'>
            <a href='./'> <img src={require('../images/B1.png')}/></a>
            <a href='./'> <img src={require('../images/B2.png')}/></a>
            <a href='./'> <img src={require('../images/B3.png')}/></a>
            <a href='./'> <img src={require('../images/B4.png')}/></a>
            <a href='./'> <img src={require('../images/B5.png')}/></a>
            <a href='./'> <img src={require('../images/B6.png')}/></a>
        </div>
    )
}

export default Strip;
// Create a system so that we can show diff-diff logo at the perticular place,
// no two same logo
// all 6 places have unique img(clickable).
