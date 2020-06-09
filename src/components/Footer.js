import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCoffee} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <p>Coded by Ylli with <FontAwesomeIcon icon={faCoffee}/> and <FontAwesomeIcon icon={faHeart}/> using ReactJS and OpenWeatherMap API</p>
  )
}

export default Footer;