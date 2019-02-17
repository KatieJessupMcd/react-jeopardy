import React, { Component } from 'react';
// import './Clue.css';

class Clue extends Component {
  static defaultProps = {};
  render() {
    return <div className="Clue display-4 text-center p-5" id="question">
    {this.props.question}
    </div>;
  }
}

export default Clue;