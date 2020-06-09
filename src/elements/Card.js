import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';


const WeatherCard = (props) => {
  return (
    <p className={props.className}><FontAwesomeIcon icon={faSun} /> 20 Celsius</p>
  )
}

export default WeatherCard;