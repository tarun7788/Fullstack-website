import React from 'react';
import './reusein.css'

const Reuse = ({ imageUrl, heading, buttonText, onButtonClick }) => {
  return (
    <div className="image1">
      <img src={imageUrl} alt="Image" />
      <h2>{heading}</h2>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default Reuse;
