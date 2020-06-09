import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBtn = () => {
  return (
      <button className='searchBtn'><FontAwesomeIcon icon={faSearch} /></button> 
  )
}

export default SearchBtn;