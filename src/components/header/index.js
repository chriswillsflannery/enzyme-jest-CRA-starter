import React from 'react';

import './Header.scss';

const Header = ({ text }) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo" data-test="logo">
          <h1>{text}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header;