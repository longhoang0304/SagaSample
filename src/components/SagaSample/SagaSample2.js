import React, { Component } from 'react';
import './style.css';

const SagaSample = ({ value, errorMsg, isLoading, IncAsync, DecSync }) => (
  <div id="home">
    <div id="value">{value}</div>
    <div id="loading">{isLoading ? 'Loading' : ''}</div>
    <div id="error">{errorMsg}</div>
    <div>
      <button onClick={IncAsync}>+</button>
      <button onClick={DecSync}>-</button>
    </div>
  </div>
);

export default SagaSample;