import React, { Component } from 'react';
// import './Answer.css';

class Answer extends Component {
  
  render() {
    if (this.props.displayAnswer){
      return (
        <div className="Answer" id="answer-display" style={{fontSize: '2rem'}}>{this.props.answer}</div>
      ) 
    } else {
      return (
        <div></div>
      )
    }
    
    
  }
}

export default Answer;