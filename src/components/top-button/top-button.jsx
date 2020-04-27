import React from 'react';
import PropTypes from 'prop-types';

import './top-button.scss';

const TopButton = ({ scrollTop }) => {

  return (
  <button 
    type="button" 
    className="button__top" 
    onClick={() => scrollTop()}
    title="Go to top"
  >
    Top
  </button>)
};

TopButton.propTypes = {
  scrollTop: PropTypes.func.isRequired
};

const TopButtonWithMemo = React.memo(TopButton);

export default TopButtonWithMemo;