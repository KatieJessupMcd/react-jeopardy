import React, { Component } from 'react';
import Clue from './Clue';
import Category from './Category';
// import Button from './Button';
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
      displayAnswer: false,
      error: false
    };
    this.getClues = this.getClues.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  showAnswer() {
    this.setState({ displayAnswer: !this.state.displayAnswer });
  }

  handleClick() {
    console.log('clicked the button YO');
    this.showAnswer();
  }

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
        <div className="row" style={{ minHeight: '15rem' }}>
          <div className="col-12 text-center">
            <Answer displayAnswer={this.state.displayAnswer} answer={answer} />
          </div>
        </div>
        <div className="row fixed-row-bottom text-center">
          <div className="col text-center">
            <button
              onClick={this.handleClick}
              id="answer-display-button"
              className="Button col-6 btn btn-primary btn-lg"
            >
              Display Answer
            </button>
            <button
              onClick={this.handleClick}
              id="new-question-button"
              className="Button col-6 btn btn-primary btn-lg"
            >
              New Question
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default CluesContainer;
