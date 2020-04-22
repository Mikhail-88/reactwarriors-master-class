import React from 'react';
import './top-button.scss';

const TopButton = ({ scrollTop }) => (
  <button 
    type="button" 
    className="button__top" 
    onClick={() => scrollTop()}
    title="Go to top"
  >
    Top
  </button>
);

export default TopButton;