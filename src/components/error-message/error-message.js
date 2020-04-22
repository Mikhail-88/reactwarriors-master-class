import React from 'react';
import './error-message.scss';

const ErrorMessage = () => (
  <div className="errorBlock">
    <img src="https://eksmo.ru/upload/iblock/c99/d_L_min.jpg" alt="error"></img>
    <span className="errorText">Something goes wrong, try again later.</span>
  </div>
)

export default ErrorMessage;