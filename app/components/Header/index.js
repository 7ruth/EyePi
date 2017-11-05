import React from 'react';
<<<<<<< HEAD

import A from './A';
import Img from './Img';
import Banner from './TNGStarFleet.gif';
=======
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
<<<<<<< HEAD
        <A href="https://en.wikipedia.org/wiki/Star_Trek:_The_Next_Generation">
          <Img src={Banner} alt="TNG - Logo" />
        </A>
=======
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
      </div>
    );
  }
}

export default Header;
