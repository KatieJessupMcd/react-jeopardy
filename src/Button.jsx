import React, { Component } from 'react';
// import './Button.css';

class Button extends Component {
  static defaultProps = {};
  render() {
    return <div className='Button col-6 btn btn-primary btn-lg'>
    {this.props.name}
    </div>;
  }
}

export default Button;