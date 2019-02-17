import React, { Component } from 'react';
import Answer from './Answer';
import Category from './Category';
import Button from './Button';
// import './AnswerContainer.css';

class AnswerContainer extends Component {
  static defaultProps = {};
  render() {
    return (
      <div className="AnswerContainer">
        <h1>"hey this is the answer container component"</h1>
        <Category />
        <Answer />
        <Button />
      </div>
    );
  }
}

export default AnswerContainer;
