import React, { Component } from 'react';
// import './Answer.css';

class Answer extends Component {
  static defaultProps = {};
  render() {
    return <div className="Answer display-4 my-5" id="answer-display">{this.props.answer}</div>;
  }
}

export default Answer;