import React from 'react'
import '../styles/Login.css'
import triviaLogo from '../styles/images/logotrivia.png';
import iconeTrybe from '../styles/images/iconetrybe.png';
import PropTypes from 'prop-types';
import {hanldeGetDataLogin} from '../redux/actions'
import { connect } from 'react-redux';
class Login extends React.Component {
  state = {
    name: '',
    email: '',
  };
  handleTypeInput = ({target}) => {
    const { value, name } = target;
    this.setState({[name] : value})
  }
  hanldeLogin = async () => {
    await this.props.dispatch(hanldeGetDataLogin(this.state))
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
          onClick={this.hanldeLogin}
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
const mapDispatchToProps = dispatch => ({
  dispatch
})
const mapStateToProps = state => ({
  nameData: state.player.name
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)