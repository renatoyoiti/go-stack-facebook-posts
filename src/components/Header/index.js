import React from 'react';

import './style.css';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className="navbar">
      <a href="#"><img src={Logo} alt=""/></a>

      <div className="profile">
        <a href="#">Meu perfil</a>
      </div>
    </div>
  )
};

export default Header;
