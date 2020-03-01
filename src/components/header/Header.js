import React from 'react';
import Logo from '../../assets/me.png';
import './Header.scss';

const Header = (props) => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <h1>COMPANY</h1>
        </div>
      </div>
    </header>
  )

}

export default Header;