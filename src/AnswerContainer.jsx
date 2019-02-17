import React, { Component } from 'react';
import Answer from './Answer';
import Category from './Category';
import Button from './Button';
import axios from 'axios'; 
// import './AnswerContainer.css';

class AnswerContainer extends Component {
  constructor(props){
    super(props); 
    this.state = {
      categories : [], 
      error: false
    }
    this.getClues = this.getClues.bind(this)
  }

 async getClues(){
    try {
      const data = await axios.get('http://jservice.io/api/random'); 
      console.log('DATA', data); 
    } catch (error){
      this.setState({
        error: true
      })
    }
  }
  static defaultProps = {};

  async componentDidMount(){
    this.getClues(); 
  }
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
