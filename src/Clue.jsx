import React, { Component } from 'react';
// import './Clue.css';

class Clue extends Component {
  static defaultProps = {};
  render() {
    return <div className="Clue display-4 text-center p-5" style={{fontSize: '2.5rem', marginRight: '5%', marginLeft: '5%'}}>
    {this.props.question}
    </div>;
  }
}

export default Clue;