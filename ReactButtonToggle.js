/**
 * We provided some simple React template code. Your goal is to modify
 * the component so that you can properly toggle the button to switch
 * between an ON state and an OFF state. When the button is on and it is
 * clicked, it turns off and the text within it changes from ON to OFF
 * and vice versa. Make use of component state for this challenge.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ON"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        text: (prevState.text == "ON") ? "OFF" : "ON"
      }
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.text}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);