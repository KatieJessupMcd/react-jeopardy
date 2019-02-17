import React, { Component } from 'react';
import Clue from './Clue';
import Category from './Category';
import Button from './Button';
import axios from 'axios';
import Answer from './Answer';
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
    let { category, question, answer } = this.state;
    return (
      <div>
        <div className="jumbotron CluesContainer">
          <h1 className="display-3 text-center">Jeopardy!</h1>
          <Category category={category} />
          <Clue question={question} />
        </div>
        <div className="container-fluid text-center">
          <Answer answer={answer} />
        </div>
        <div className="row text-center">
          <Button name="Display Answer"id="answer-display-button"/>
          <Button name="New Question" id="new-question-button"/>
        </div>
      </div>
    );
  }
}

export default CluesContainer;
