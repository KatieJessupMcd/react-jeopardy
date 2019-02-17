import React, { Component } from 'react';
// import './Button.css';

class Button extends Component {
  static defaultProps = {};
  render() {
    return <div className='Button col-6 btn btn-primary btn-lg'>
    <h4>This will hold the two buttons</h4>
    </div>;
  }
}

export default Button;