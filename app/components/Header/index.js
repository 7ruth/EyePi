import React from 'react';

import A from './A';
import Img from './Img';
import Banner from './TNGStarFleet.gif';
import HeaderDiv from './HeaderDiv';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* <A href="https://en.wikipedia.org/wiki/Star_Trek:_The_Next_Generation"> */}
          <HeaderDiv>
            Eye Pi
          </HeaderDiv>
        {/* </A> */}
      </div>
    );
  }
}

export default Header;
