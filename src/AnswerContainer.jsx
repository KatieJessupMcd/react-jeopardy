import React, { Component } from 'react';
import Clue from './Clue';
import Category from './Category';
import Button from './Button';
import axios from 'axios';
// import './CluesContainer.css';

class CluesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      question: '',
      answer: '',
      error: false
    };
    this.getClues = this.getClues.bind(this);
  }

  async getClues() {
    try {
      const data = await axios.get('http://jservice.io/api/random');
      let clueInfo = data.data[0];
      let category = clueInfo.category.title;
      let question = clueInfo.question;
      let answer = clueInfo.answer;

      this.setState({ category: category, question: question, answer: answer });
    } catch (error) {
      this.setState({
        error: true
      });
    }
  }
  static defaultProps = {};

  componentDidMount() {
    this.getClues();
  }
  render() {
    return (
      <div className="CluesContainer">
        <h1>"hey this is the Clues container component"</h1>
        <Category />
        <Clue />
        <Button />
      </div>
    );
  }
}

export default CluesContainer;
