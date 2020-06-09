import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default class SearchBtn extends React.Component {
  render() {
    return (
        <button onClick={this.props.handleBtnClick} className='searchBtn'><FontAwesomeIcon icon={faSearch} /></button> 
    )
  }
}

