import React from 'react';

import A from './A';
import Img from './Img';
import Banner from './TNGStarFleet.gif';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://en.wikipedia.org/wiki/Star_Trek:_The_Next_Generation">
          <Img src={Banner} alt="TNG - Logo" />
        </A>
      </div>
    );
  }
}

export default Header;
