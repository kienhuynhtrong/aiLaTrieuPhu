import React from 'react'
import '../styles/Login.css'
import triviaLogo from '../styles/images/logotrivia.png';
import iconeTrybe from '../styles/images/iconetrybe.png';
import PropTypes from 'prop-types';
class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };
  handleTypeInput = ({target}) => {
    const { value, name } = target;
    this.setState({[name] : value})
  }
  render() {
    const {name, email} = this.state;
    return (
      <div className='divLoginPage'>
        <img alt="imageBackGround" src={triviaLogo}></img>
        <div className="loginDiv">
          <input
          name="email"
          placeholder='What is your Gravatar email?'
          type="text"
          value={email}
          onChange={this.handleTypeInput}
          >
          </input>
          <input
          name="name"
          placeholder='What is your name?'
          type="text"
          value={name}
          onChange={this.handleTypeInput}
          >
          </input>
          <button
          type='button'
          >
            Play
          </button>
          <button
          type="button"
          >
            Config
          </button>
        </div>
        <img alt="logoTrivia" src={ iconeTrybe } />
      </div>
    )
  }
}
export default Login