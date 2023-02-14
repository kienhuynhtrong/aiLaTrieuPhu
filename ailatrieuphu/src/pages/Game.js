import React, { Component } from 'react'
import Header from '../Component/Header'
import '../App.css';
import { ReactComponent as LogoTrivia }from '../pages/svg/LogoTrivia.svg'
import { ReactComponent as Timer }from '../pages/svg/Timer.svg'
class Game extends Component {
  state = {
    response: '',
    idx: 0,
    resp: [],
    timer: 0
  }
  async componentDidMount() {
    const localToken = localStorage.getItem('token');
    const data = await fetch(`https://opentdb.com/api.php?amount=5&token=${localToken}`)
      .then((resp) => resp.json())
    this.setState({
      response: data.results,
      resp: [
        ...data.results[0].incorrect_answers,
        data.results[0].correct_answer
      ]
    })
    const timeSeconds = 1000;
    setInterval(() => this.timer(), timeSeconds)
  }
  timer = () => {
    this.setState((prevState) => ({
      timer: prevState.timer + 1
    }))
    this.forceUpdate()
  }
  render() {
    const {response, idx, resp, timer} = this.state;
    if(response.length > 0) {
      return (
        <>
          <Header></Header>
          <div className="div__game">
            <section className="section__question">
              <LogoTrivia></LogoTrivia>
              <h2
              className={ response[idx].difficulty }
              data-testid="question-category"
              >{response[idx].category}</h2>
              <p data-testid="question-text">{response[idx].question}</p>
              <section>
                <Timer></Timer>
                <p>{`Tempo: ${timer}s`}</p>
              </section>
            </section>
            <div className="div__answer" data-testid="answer-options">
              {
                resp.map((item, idx) => (
                  <button>
                  {item}
                  </button>
                ))
              }
            </div>
          </div>
        </>
      )
    }
  }
}
export default Game