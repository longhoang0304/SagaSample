import React, { Component } from 'react';
import './style.css';
import {delay} from '../../common/utils';

export default class SagaSample1 extends Component {
  state = {
    value: 0,
  }
  handleIncreasement = () => {
    delay(1000).then(() => this.setState((state) => ({ value: state.value + 1 })));
  }
  handleDecreasement = () => {
    // delay(10000);
    this.setState((state) => ({ value: state.value - 1 }));
  }
  render() {
    return (
      <div id="home">
        <div id="value">{this.state.value}</div>
        <div>
          <button onClick={this.handleIncreasement}>+</button>
          <button onClick={this.handleDecreasement}>-</button>
        </div>
      </div>
    )
  }
}
