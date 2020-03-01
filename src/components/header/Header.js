import React from 'react';
import './Header.scss';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div data-test="logo">
          <h1>COMPANY</h1>
        </div>
      </div>
    </header>
  )

}

export default Header;