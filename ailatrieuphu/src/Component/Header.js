import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import {fetchImage} from '../redux/actions'

class Header extends Component {
  async componentDidMount() {
    const { ravatarEmail, dispatch } = this.props;
    const hash = md5(ravatarEmail).toString();
    await dispatch(fetchImage(hash));
  }
  render() {
    const { profileImage, name } = this.props;
    return (
      <header>
        <i />
        <i />
        <section>
          <img
            src={ profileImage || 'https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc' }
            alt="gravatar"
            data-testid="header-profile-picture"
          />
          <h1 data-testid="header-player-name">{name}</h1>
        </section>
      </header>
    )
  }
}
const mapStateToProps = (state) => ({
  ravatarEmail : state.player.ravatarEmail,
  profileImage: state.player.profileImage,
  name: state.player.name,
})
Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ravatarEmail: PropTypes.string,
  profileImage: PropTypes.string,
  name: PropTypes.string,
};

export default connect(mapStateToProps)(Header)