import Logo from '../elements/Logo';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <a href="https://github.com/yllabazi" target="_blank"><p id='myName'>coded by yllabazi <FontAwesomeIcon icon={faGithub}/></p></a>
    </div>
  )
}

export default Header;